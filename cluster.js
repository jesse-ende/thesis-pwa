const { Cluster } = require('puppeteer-cluster');
const axios = require("axios");
const fs = require('fs');
const os = require('os');
const { exit } = require('process');
var JSSoup = require('jssoup').default;
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
        if (navigator) {
            if (navigator.serviceWorker) {
                registration = navigator.serviceWorker.getRegistration();
                return {
                    "Offline capabilities": "caches" in window,
                    "Push notifications": "pushManager" in registration,
                    "Add to Home Screen": document.createElement("link").relList.supports("manifest") && "onbeforeinstallprompt" in window,
                    "Background Sync": "sync" in registration,
                    "Navigation Preload": "navigationPreload" in registration,
                    "Silent Push": "budget" in navigator && "reserve" in navigator.budget,
                    "Storage Estimation": "storage"in navigator && "estimate" in navigator.storage,
                    "Persistent Storage": "storage"in navigator && "persist"in navigator.storage,
                    "Web Share": "share" in navigator,
                    "Media Session": "mediaSession" in navigator,
                    "Media Capabilities": "mediaCapabilities" in navigator,
                    "Device Memory": "deviceMemory" in navigator,
                    "Getting Installed Related Apps": "getInstalledRelatedApps" in navigator,
                    "Payment Request": "PaymentRequest" in window,
                    "Credential Management": "credentials" in navigator
                }
            }
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
            maxConcurrency: 1,
            monitor: true,
            timeout: 60 * 1000,
            puppeteerOptions: {
                args: browserArgs,
                // ignoreHTTPSErrors: true,
            },
        });

        var outputFolder = __dirname + "/SWs/emptySWs/"
        var outputFolder = __dirname + "/SWs/faultySWs/"
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
            console.log("processing", url)
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
                    await page.goto(url, {waitUntil: 'networkidle0', timeout: 30000 + 1000}).catch(e => (addUnreachableSite(unreachableSitesFolder, url))),
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
                await page.close()
                return
            }
            console.log("Found sw with source", sw._targetInfo.url);

            var siteFolder = outputFolder + sw._targetInfo.url.replace("https://", "").split("/")[0]
            // await waitForServiceWorkers(page);
            var feature_support = JSON.stringify(await getFeatureSupport(page))
            console.log("feature support", feature_support, process.cwd())
            return;
            await fs.writeFileSync(siteFolder + "/" + "features.json.bak", feature_support);

            try {
                var index = await axios.get(url, {timeout: 30000});
            } catch {
                console.log("Couldn't get index of", url);
                await addUnreachableSite(unreachableSitesFolder, url)
            }
            
            // var links = await page.$("link")
            // console.log("links", links)
            // // var links = page.getElementsByTagName("link")
            // // links[0].getAttribute("href")
            // for (var link of links) {
            //     console.log("link", link)
            // }
            if (!fs.existsSync(siteFolder)){
                fs.mkdirSync(siteFolder);
                console.log("making sitefolder", siteFolder)
            }
            fs.writeFileSync(siteFolder + "/index.html", index.data, {encoding:'utf8',flag:'w'});

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
            var siteFolder = outputFolder + "/" + sw._targetInfo.url.replace("https://", "").split("/")[0]
            console.log("sitefolder", siteFolder)

            try {
                fs.promises.access(siteFolder);
            } catch (error) {
                fs.mkdirSync(siteFolder);
            }
            fs.appendFile(siteFolder + "/" + sw._targetInfo.url.replace("https://", "").split("/")[1], result.data);

            if (result) {
                fs.writeFileSync(siteFolder + "/" + sw._targetInfo.url.replace("https://", "").replace(/\//g, "_").substring(0, 25), result.data, {encoding:'utf8',flag:'w'});
            }
            else {
                fs.writeFileSync(siteFolder + "/" + sw._targetInfo.url.replace("https://", "").replace(/\//g, "_").substring(0, 25) + "emptySW", "", {encoding:'utf8',flag:'w'});
            }
            
            if (manifestResult) {
                try {
                    fs.writeFileSync(siteFolder + "/" + "manifest.json", JSON.stringify(manifestCheck(manifestResult.data)))
                } catch (error) {
                    // console.log(error.substring(0, 500))
                    console.log("Checking manifest went wrong.");
                    fs.writeFileSync(siteFolder + "/" + "manifestError", manifestResult.data)
                }
            }

            fs.writeFileSync(siteFolder + "/" + "features.json",  JSON.stringify(await getFeatureSupport(page)));
            if (securityDetails) {
                fs.writeFileSync(siteFolder + "/" + "requests",  securityDetails.toString())
            }
        });

        var currentprogress = fs.readFileSync(__dirname + "/cluster_progress.txt").toString();
        var urls = ['1,samsonite.com'];
        // empty
        urls = ['salvationarmy.org.hk', 'www.physioinq.com.au', 'www.rolia.net', 'www.roselinlin.com', 'www.algosobre.com.br', 'www.gsmkolik.com', 'www.leomax.ru', 'www.letskinky.com', 'rfindustries.com', 'www.cycleclassifieds.us', 'ukrzoloto.ua', 'www.onebladeshave.com', 'www.jackpotcapital.eu', 'pockee.com', 'www.golbazar.com', 'www.gasiweb.com', 'nzwarriors.com', 'www.flyonit.com',  'www.marktest.com', 'citizensgbr.org', 'zolotoy.ru', 'www.dnaromance.com', 'shytok.net', 'www.carecalendar.org', 'www.bse-sofia.bg', 'www.unra.go.ug', 'www.description-pdf.ru', 'shopp.ir', '2-berega.ru', 'phoneemdad.com', 'pitstopusa.com', 'facturedo.pe', 'www.lamuscle.com', 'sotaychemgio.com', 'ideco-ipo-nisa.com', 'www.coolcousin.com', 'www.casadaergonomia.com.br', 'swingers.club', 'ci-plugin.theloyaltyco.app', 'statusheart.com', 'city-adm.lviv.ua', 'hoaquadaklak.com', 'jimmybrings.com.au', 'band-vans.net', 'euromed.ua', 'www.tropicalsky.co.uk', 'yadacar.com', 'www.galeno.com.ar', 'www.tejaratfelez.com', 'tropistudio.com', 'www.sosohome.co.kr', 'localsloveus.com', 'www.beeducated.pk', 'revolutionwatch.com', 'www.sexygame666.com', 'www.bandvista.com', 'www.tripshock.com', 'www.socooc.com', 'forum.bodybuilding.nl', 'puntocellulare.it', 'www.iasparliament.com', 'www.clinicspots.com', 'www.ub.com.vn', 'aassttiinn.com', 'www.b-soccer.jp', 'nc4x4.com', 'www.doxdun.com', 'www.thelog.com', 'www.ask.ir', 'www.bancointernacional.com.ec', 'www.giftcardstore.ir', 'www.culturainglesa.net', 'www.cheltladiescollege.org', 'umonics.sg', 'tosbourn.com', 'www.mitradel.gob.pa', 'chat.wisvis.com', 'ariaimen.com', 'www.soyvida.com', 'braun-russia.ru', 'sauconsource.com', 'www.mouwazaf-dz.com', 'krasnoturinsk.info', 'wazobet.com']

        urls = ['carrodez.com.br', 'nacdnet.org']        
        // urls = ['watchtvseries.video', 'myfreeblack.com', 'tuberel.com', 'pornerbros.com', 'see.xxx', 'wotofo.com', 'universalstandard.com', 'docusaurus.io']
        // urls = ['www.amazonstock.com']
        for (var i = 0; i < urls.length; i++) {
            console.log("urls i", urls[i], urls.length, i)
            // const url = urls[i].split(",")[1];
            const url = urls[i]
            cluster.execute("https://" + url.replace("\r", ""));
            // console.log("progress", i);
            // if (i === start + 5)
            //     exit(1);
        }
            
        await cluster.idle();
        await cluster.close();
})();