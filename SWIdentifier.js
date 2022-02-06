/*
 * Service worker scraper that can identify a SW in a webpage and scrape it if it is found. It runs on multiple cores,
 * thereby speeding up the scraping process.
 */
const { Cluster } = require('puppeteer-cluster');
const axios = require("axios");
const fs = require('fs');
const os = require('os');
var cpuCount = os.cpus();
cpuCount = cpuCount.length;

function noOp(){
    return;
}

(async () => {    
    console.log("Using", cpuCount, "CPU cores")

        // Initialise the browser and cluster
        var browserArgs = ['--enable-features=NetworkService']
        const cluster = await Cluster.launch({
            concurrency: Cluster.CONCURRENCY_BROWSER,
            maxConcurrency: cpuCount,
            monitor: true,
            timeout: 60 * 1000,
            puppeteerOptions: {
                args: browserArgs,
            },
        });
        
        // Set the output folders and create them if they do not exist
        var outputFolder = __dirname + "/SWs/emptySWs/"
        var swsFound = 0;
        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder);
        }

        cluster.on('taskerror', (err, data, willRetry) => {
            if (willRetry) {
              console.warn(`Encountered an error while crawling ${data}. ${err.message}\nThis job will be retried`);
            } else {
              console.error(`Failed to crawl ${data}: ${err.message}`);
            }
        });

        // The scraping of all urls is done here. Several requests are not considered for performance improvements
        await cluster.task(async ({ page, data: url }) => {
            var securityDetails = [];
            var manifestUrl;
            console.log("processing", url)
            await page.setRequestInterception(true)
            page.on('request', (request) => {
                if (request.resourceType() === 'image') request.abort()
                else if (request.resourceType() === 'stylesheet') request.abort()
                else if (request.resourceType() === 'font') request.abort()            
                else request.continue()
            })
            await page.on('response', async (res) => {
                try {
                    if (res.securityDetails() != null) {
                        securityDetails.push(res.securityDetails().protocol());
                    }
                    if (res.fromServiceWorker()) {
                        console.log("received response from sw", res)
                    }
                } catch (error) {
                    console.log("error getting security details", url)
                }
                
            })

            const LOAD_FAIL = Math.random();
            const sleep = options => new Promise(resolve => {
                options.timer = setTimeout(resolve, options.ms, options.result === undefined ? true : options.result);
            });

            // Navigate to the URL
            const sleepOptions = {ms: 30000 - 1000, result: LOAD_FAIL};
            try {
                const response = await Promise.race([
                    sleep(sleepOptions),
                    await page.goto(url, {waitUntil: 'networkidle0', timeout: 30000 + 1000}).catch(e => noOp()),
                ]);
                clearTimeout(sleepOptions.timer);
                const success = response !== LOAD_FAIL;
                if (!success) {
                    return
                }
            }
            catch {
                console.log(url, "crashed");
                return
            }

            // Wait for a SW to become active. If none becomes active, return
            try {
                console.log(url, "waiting for target")
                var sw = await page.browser().waitForTarget(target => target.type() === 'service_worker', {timeout: 5000})
            } catch (error) {
                console.log(url, "does not have a sw");
                await page.close()
                return
            }
            console.log("Found sw with source", sw._targetInfo.url);

            var siteFolder = __dirname + "/SWs/sws/" + sw._targetInfo.url.replace("https://", "").split("/")[0]
            if (!fs.existsSync(siteFolder)) {
                fs.mkdirSync(siteFolder);
            }

            // Store the SW locally
            swsFound = swsFound + 1;
            try {
                var result = await axios.get(sw._targetInfo.url, {timeout: 30000});
            }
            catch (error) {
                console.log("error getting sw", url);
            }

            console.log("sitefolder", siteFolder)

            if (result) {
                fs.writeFileSync(siteFolder + "/" + sw._targetInfo.url.replace("https://", "").replace(/\//g, "_").substring(0, 25), result.data, {encoding:'utf8',flag:'w'});
            }
            else {
                fs.writeFileSync(siteFolder + "/" + sw._targetInfo.url.replace("https://", "").replace(/\//g, "_").substring(0, 25) + "emptySW", "", {encoding:'utf8',flag:'w'});
            }

            // Scrape corresponding index of the SW and store in the same folder as the SW
            try {
                var index = await axios.get(url, {timeout: 30000});
            } catch {
                console.log("Couldn't get index of", url);
            }
            if (index.data){
                fs.writeFileSync(siteFolder + "/index.html", index.data, {encoding:'utf8',flag:'w'});
            }

            if (securityDetails) {
                fs.writeFileSync(siteFolder + "/" + "requests",  securityDetails.toString())
            }
        });

        // Load the URLs from the Tranco list 'top-1m.csv' CSV-file
        var urls = fs.readFileSync("./top-1m.csv", 'utf8' , (err) => {
            if (err) {
                console.error("error reading urls", err)
                return
            }
        });

        urls = urls.split("\n");

        // Execute the cluster tasks with urls
        for (var i = 0; i < urls.length; i++) {            
            url = urls[i].split(",")[1];
            if (url) {
                cluster.execute("https://" + url.replace("\r", ""));
            }
        }
            
        await cluster.idle();
        await cluster.close();
})();