const { Cluster } = require('puppeteer-cluster');
const axios = require("axios");
const fs = require('fs');
const os = require('os')
const cpuCount = os.cpus().length
// require('https').globalAgent.options.ca = require('ssl-root-cas').create();
var rootCas = require('ssl-root-cas').create();
// const { exit } = require('process');

waitForServiceWorkers = function(page) {
    return page.evaluate(() =>
        // 1
        navigator.serviceWorker.getRegistrations().then(registrations => {
            return Promise.all(
                // 2
                registrations.map(
                    reg =>
                        new Promise(resolve => {
                            // 3
                            if (reg) {
                                resolve();
                            } else {
                                reg.onupdatefound = () => {
                                    // simulate passage of time inside browser,
                                    // so that service worker can install on the next tick.
                                    setTimeout(resolve, 10);
                                };
                            }
                        })
                )
            );
        })
    );
};

function manifestCheck(manifest) {
    return {
        "Background color": "background_color" in manifest && manifest.background_color,
        "Categories": "categories" in manifest && manifest.categories,
        "Description": "description" in manifest && manifest.description,
        "Dir": "dir" in manifest && manifest.dir,
        "Display": "display" in manifest && manifest.display,
        "Iarc_rating_id": "iarc_rating_id" in manifest && manifest.iarc_rating_id,
        "Icons": "icons" in manifest && manifest.icons,
        "Lang": "lang" in manifest && manifest.lang,
        "Name": "name" in manifest && manifest.name,
        "Orientation": "orientation" in manifest && manifest.orientation,
        "Prefer related applications": "prefer_related_applications" in manifest && manifest.prefer_related_applications,
        "Related applications": "related_applications" in manifest && manifest.related_applications,
        "Scope": "scope" in manifest && manifest.scope,
        "Screenshots": "screenshots" in manifest && manifest.screenshots,
        "Short name": "short_name" in manifest && manifest.short_name,
        "Shortcuts": "shortcuts" in manifest && manifest.shortcuts,
        "Start url": "start_url" in manifest && manifest.start_url,
        "Theme color": "theme_color" in manifest && manifest.theme_color,
    }
}

async function getFeatureSupport(page) {
    return page.evaluate(() => {
        registration = navigator.serviceWorker.getRegistration();
        return {
            "Offline capabilities": "caches" in window,
            "Push notificatios": "pushManager" in registration,
            "Add to Home Screen": document.createElement("link").relList.supports("manifest") && "onbeforeinstallprompt" in window,
            "Background Sync": "sync" in registration,
            "Navigation Preload": "navigationPreload" in registration,
            "Silent Push": "budget" in navigator && "reserve" in navigator.budget,
            "Storage Estimation": "storage"in navigator && "estimate" in navigator.storage ,
            "Persistent Storage": "storage"in navigator && "persist"in navigator.storage ,
            "Web Share": "share" in navigator,
            "Media Session": "mediaSession" in navigator,
            "Media Capabilities": "mediaCapabilities" in navigator,
            "Device Memory": "deviceMemory" in navigator,
            "Getting Installed Related Apps": "getInstalledRelatedApps" in navigator,
            "Payment Request": "PaymentRequest" in window,
            "Credential Management": "credentials" in navigator
        }
    })
}

async function addUnreachableSite(unreachableSitesFolder, url) {
    urlReplaced = url.replace(/\//g, "_")
    urlReplaced = urlReplaced.substring(0,25)
    if (fs.existsSync(unreachableSitesFolder + urlReplaced + ".txt")) {
        console.log("unreachable site", url, "already exists");
    } else {
        fs.writeFileSync(unreachableSitesFolder + urlReplaced + ".txt", "");
    }
    return
}


(async () => {    
    console.log("cpus count", cpuCount)

        var browserArgs = ['--enable-features=NetworkService']
        const cluster = await Cluster.launch({
            concurrency: Cluster.CONCURRENCY_BROWSER,
            maxConcurrency: 8,
            monitor: true,
            timeout: 60 * 1000,
            puppeteerOptions: {
                args: browserArgs,
                // ignoreHTTPSErrors: true,
            },
        });

        var outputFolder = __dirname + "/SWsbrowser/"
        var unreachableSitesFolder = __dirname + "/unreachable/"
        var unreachableUrls = [];
        var swsFound = 0;
        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder);
        }
        if (!fs.existsSync(unreachableSitesFolder)) {
            fs.mkdirSync(unreachableSitesFolder);
        }
        if (fs.existsSync(unreachableSitesFolder + ".txt")) {
            fs.unlinkSync(unreachableSitesFolder + ".txt");
        }

        var urls = fs.readFileSync("./top-1m.csv", 'utf8' , (err) => {
                if (err) {
                    console.error(err)
                    return
                }
        });
        urls = urls.split("\n");

        cluster.on('taskerror', (err, data, willRetry) => {
            if (willRetry) {
              console.warn(`Encountered an error while crawling ${data}. ${err.message}\nThis job will be retried`);
            } else {
              console.error(`Failed to crawl ${data}: ${err.message}`);
            }
        });

        await cluster.task(async ({ page, data: url }) => {
            var securityDetails = [];
            var manifestUrl;
            var header = {"service-worker": "script"};
            // require('https').globalAgent.options.ca = rootCas;

            // await page.setRequestInterception(true);
            // await page.on('request', async request => {
            //     // if (['stylesheet', 'font', 'image'].indexOf(request.resourceType()) !== -1) {
            //     //     request.abort()
            //     // }
            //     // else {
            //         // console.log("request header", request.headers());
            //         // if (request.resourceType() === "manifest") {
            //             // console.log("setting manifest url", request._url);
            //             // manifestUrl = request._url;
            //         // }
            //         // request.continue();
            //     // }
            //     if ("service-worker" in request.headers()) {
            //         console.log("request script", request.headers);
            //     }
            //     request.continue();
            // })
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
                    // console.log(error)
                    console.log("error getting security details", url)
                }
                
            })

            const LOAD_FAIL = Math.random();
            const sleep = options => new Promise(resolve => {
                options.timer = setTimeout(resolve, options.ms, options.result === undefined ? true : options.result);
            });

            const sleepOptions = {ms: 30000 - 1000, result: LOAD_FAIL};
            try {
                const response = await Promise.race([
                    sleep(sleepOptions),
                    page.goto(url, {waitUntil: 'networkidle0', timeout: 30000 + 1000}).catch(e => (addUnreachableSite(unreachableSitesFolder, url))),
                ]);
                clearTimeout(sleepOptions.timer);
                const success = response !== LOAD_FAIL;
                if (!success) {
                    await addUnreachableSite(unreachableSitesFolder, url)
                    return
                }
            }
            catch {
                console.log(url, "crashed");
                await addUnreachableSite(unreachableSitesFolder, url)
                return
            }

            try {
                console.log(url, "waiting for target")
                var sw = await page.browser().waitForTarget(target => target.type() === 'service_worker', {timeout: 5000})
                // var sw = await swTarget.worker();
            } catch (error) {
                console.log(url, "does not have a sw");
                return
            }
            console.log("Found sw with source", sw._targetInfo.url);
            
            try {
                var index = await axios.get(url, {timeout: 30000});
            } catch {
                console.log("Couldn't get index of", url);
                await addUnreachableSite(unreachableSitesFolder, url)
            }

            if (index) {
                if (index.data) {
                    index = index.data.toString().split("\n");
                    for (let i = 0; i < index.length; i++) {
                        line = index[i]
                        if (line.includes("manifest")) {
                            href_index = line.indexOf("href=", line.indexOf("manifest"));
                            quote_char = line[href_index + "href=".length]
                            second_quote_index = line.indexOf(quote_char, href_index + "href=".length + 1)
                            manifestUrl = url + line.substring(href_index + "href=".length + 1, second_quote_index)
                        }
                    }  
                }
            }
            // console.log("index", index.data)

            console.log(url, "manifest url", manifestUrl);
            if (manifestUrl) {
                try {
                    var manifestResult = await axios.get(manifestUrl, {timeout: 30000});
                }
                catch (error) {
                    console.log(url, "failed to get manifest");
                    manifestResult = ""
                }
            }

            swsFound = swsFound + 1;
            try {
                var result = await axios.get(sw._targetInfo.url, {timeout: 30000});
            }
            catch (error) {
                console.log("error getting sw", url);
            }
            var siteFolder = outputFolder + sw._targetInfo.url.replace("https://", "").split("/")[0]

            if (!fs.existsSync(siteFolder)){
                fs.mkdirSync(siteFolder);
            }
            try {
                fs.promises.access(siteFolder);
            } catch (error) {
                fs.mkdirSync(siteFolder);
            }
            // fs.appendFile(siteFolder + "/" + sw._targetInfo.url.replace("https://", "").split("/")[1], result.data);
            if (result) {
                fs.writeFileSync(siteFolder + "/" + sw._targetInfo.url.replace("https://", "").replaceAll("/", "_").substring(0, 25), result.data, {encoding:'utf8',flag:'w'});
            }
            else {
                fs.writeFileSync(siteFolder + "/" + sw._targetInfo.url.replace("https://", "").replaceAll("/", "_").substring(0, 25) + "emptySW", "", {encoding:'utf8',flag:'w'});
            }
            
            if (manifestResult) {
                try {
                    fs.writeFileSync(siteFolder + "/" + "manifest.json", JSON.stringify(manifestCheck(manifestResult.data)))
                } catch (error) {
                    console.log(error)
                    console.log("Checking manifest went wrong.");
                    fs.writeFileSync(siteFolder + "/" + "manifestError", manifestResult.data)
                }
            }
            
            fs.writeFileSync(siteFolder + "/" + "features.json",  JSON.stringify(await getFeatureSupport(page)));
            if (securityDetails) {
                fs.writeFileSync(siteFolder + "/" + "requests",  securityDetails.toString())
            }

            // if (swsFound === 10) {
            //     console.log("exiting", urls.indexOf(url.substring(7, url.length)));
            //     // TODO: check waar bent gebleven
            //     exit();
            // }
        });

        // 16030
        for (var i = 367826; i < urls.length - 1; i++) {
            // console.log("urls i", urls[i])
            const url = urls[i].split(",")[1];
            // const url = "twitter.com"
            cluster.execute("https://www." + url.replace("\r", ""));
        }
            
        await cluster.idle();
        await cluster.close();
})();