const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const { workerData, parentPort } = require('worker_threads');
const axios = require("axios");
const fs = require('fs');
const { exit } = require('process');
// const { url } = require('inspector');

async function closeContexts(contextArray) {
    for (let i = 0; i < contextArray.length; i++) {
        await contextArray[i].close();
        // delete contextArray[i];
    }
}

async function axiosSWViaUrl(url, fileName) {
    url = url + fileName
    try {
        var res = await axios.get(url);
        if (res && ! res.isAxiosError) {
            console.log("\x1b[32m", "Found sw", url);
            if (res.data.toString().includes("<!DOCTYPE") || res.data.toString().includes("<!doctype")) {
                console.log("SW is html")
                return false;
            }
            var siteFolder = url.replace("https://", "").split("/")[0]
            console.log("saving sw file", siteFolder)
            if (!fs.existsSync(siteFolder)){
                fs.mkdirSync(siteFolder);
            }
            fs.appendFileSync(siteFolder + fileName, res.data);
            return true;
        }
    } catch (error) {
        // console.log(error);
    }
    return false;
}

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
                            if (reg.active) {
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

function logRequest(interceptedRequest) {
    console.log('A request was made by the ServiceWorker:', interceptedRequest.url());
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

var browser;
var outputFolder = "./websites/"
var unreachableSitesFolder = "./unreachableWebsites/"

async function checkUrlSw(url) {
    // var siteName = url.split(".")[0].split(",")[1]
    var browserArgs = ['--enable-features=NetworkService']
    var unreachableUrls = [];

    console.log('Starting detection for', url);
    
    if (!!await browser.process().signalCode) {
        console.log('\x1b[31m', url, "doesnt have browser");
        while (true) {
            try {
                browser = await puppeteer.launch({args: browserArgs,
                    headless: true});
            } catch (error) {
                console.log('\x1b[31m', url, "Failed to launch browser.");
            }
        }
    }

    var incognito;
    while (true) {
        try {
            console.log(id, "creating incognito", !!await browser.process().signalCode);
            if (!!await browser.process().signalCode) {
                console.log('\x1b[31m', id, "doesnt have browser");
                while (true) {
                    try {
                        browser = await puppeteer.launch({args: browserArgs, headless: true});
                    } catch (error) {
                        console.log('\x1b[31m', id, "Failed to launch browser.");
                        continue;
                    }
                    break
                }
            }
            incognito = await browser.createIncognitoBrowserContext({args: browserArgs});
            
        } catch (error) {
            console.log('\x1b[31m', id, "Failed to create incognitobrowser");
            console.log(error);
            continue;
        }
        break;
    }
    
    console.log(url, "creating newtab");
    var page;
    try {
        page = await browser.newPage();
        
    } catch (error) {
        console.log('\x1b[31m', url, "Failed to open new tab");
    }
    console.log(id, "enabling cache");

    await page.setCacheEnabled(false);
    
    var manifestUrl;
    await page.on('request', request => {
        if (request.resourceType() === "manifest") {
            manifestUrl = request._url;
        }
        // console.log(Object.keys(request), request)
    })
    var securityDetails = [];
    page.on('response', async (res) => {
        if (res.securityDetails() != null) {
            // res.securityDetails().subjectAlternativeNames().forEach(san => {
            //     if (!securityDetails.includes(san)) {
            //         securityDetails.push(san)
            //     } 
            // });
            securityDetails.push(res.securityDetails().protocol());
        }
    })
    
    try {
        console.log(url, "going to page")

        await page.goto(url, {waitUntil: 'networkidle0', timeout: 15000});
    } catch (error) {
        console.log('\x1b[31m', `Couldn't reach the following url within the expected timeframe: ${url}`);
        // console.log('\x1b[31m', `${url}`);
        unreachableUrls.push(url);

        await closeContexts([page, incognito]);
        process.send(`processed ${url}`);
        return
        // continue;
    }

    // TODO: tryout service worker detection
    // console.log("waiting for sw");
    // page.evaluate(() => {
    //     navigator.serviceWorker.register();
    // })
    // await waitForServiceWorkers(page);
    
    // await page._client.send('ServiceWorker.enable');
    // page.on('serviceworkercreated', serviceWorker => {
    //     serviceWorker.on('request', logRequest);
    //   });
    // console.log("checking sw");
    // var val = await Promise.race([page.evaluate(async () => {
    //     await navigator.serviceWorker.getRegistrations();
    //     if (await navigator.serviceWorker.ready) {
    //         return await page.browser().waitForTarget(target => (target.type() === 'service_worker' || target.type() === 'serviceWorker'), { timeout: 1000 })

    //         return navigator.serviceWorker.controller;
    //     }
    //     return " not"}),
    //     page.waitForTimeout(10000)]);
    // console.log("va;", val)
    // console.log(check)

    // check = await page.evaluate("navigator.serviceWorker", {timeout: 5000})
    // console.log(check)
    // await closeContexts([page, incognito]);

    var sw;
    try {
        console.log(id, "waiting for target", url)
        sw = await browser.waitForTarget(target => (target.type() === 'service_worker'), { timeout: 1000 })   
    } catch (error) {

        await closeContexts([page, incognito]);
        process.send(`processed ${url}`);
        return
        // continue;
    }

    // console.log("Feature support", await getFeatureSupport(page))
    // console.log("Security details", securityDetails)
    if (!manifestUrl) {
        var index = await axios.get(url);
        index = index.data.split("\n")
        console.log(`url1 ${url}`)
        for (let i = 0; i < index.length; i++) {
            line = index[i]
            if (line.includes("manifest")) {
                href_index = line.indexOf("href=", line.indexOf("manifest"));
                quote_char = line[href_index + "href=".length]
                second_quote_index = line.indexOf(quote_char, href_index + "href=".length + 1)
                manifestUrl = url.concat(line.substring(href_index + "href=".length + 1, second_quote_index))
            }
        }
        console.log(`manifest url ${manifestUrl}`)
        console.log(manifestUrl, "\r\n");
    }
    console.log(`url ${url} manifest url ${manifestUrl}`);
    // var manifestResult = await axios.get(manifestUrl);
    process.send(`processed ${url}`);

    return
    // console.log("Manifest", manifestCheck(manifestResult.data))

    
    // TODO: tryout for extension interaction
    // const targets = await browser.targets();
    // const backgroundPageTarget = targets.find(
    //     (target) => target.type() === 'popup_page'
    // );
    // const backgroundPage = await backgroundPageTarget.page();
    // console.log("yolo", Object.keys(backgroundPage), backgroundPage);
    // let frameworks = await backgroundPage.evaluate(frameworks => {
    //     // let frameworkFiltered = "";
    //     let frameworksRaw = document.getElementById('odd');
    //     return frameworksRaw
    //     for (let framework of frameworksRaw) {
    //         frameworks += framework.textContent + "\n";
    //     }
    //     return frameworks;
    // })
    // console.log("frameworks", frameworks)
    // const extensionPage = await page.goto(backgroundPage._target._targetInfo.url);
    // console.log("ext page", Object.keys(extensionPage), extensionPage);

    // check = await page.evaluate(() => {return setTimeout(() => {
        
    // }, 100000)});
    // console.log("check", check)
            
    // console.log(!sw._targetInfo.url.includes(siteName))
    // if (!sw._targetInfo.url.includes(siteName)) {
    //     console.log("\x1b[32m", "sw found", siteName, sw._targetInfo.url);
    //     continue
    // }

    // swsFound = swsFound + 1;
    console.log("\x1b[32m", "Found sw with source", sw._targetInfo.url);
    var result = await axios.get(sw._targetInfo.url);
    
    var siteFolder = outputFolder + sw._targetInfo.url.replace("https://", "").split("/")[0]
    console.log("target url", sw._targetInfo.url)
    if (!fs.existsSync(siteFolder)){
        fs.mkdirSync(siteFolder);
    }
    fs.writeFileSync(siteFolder + "/" + sw._targetInfo.url.replace("https://", "").split("/")[1], result.data);
    fs.writeFileSync(siteFolder + "/" + "manifest.json", JSON.stringify(manifestCheck(manifestResult.data)))
    fs.writeFileSync(siteFolder + "/" + "features.json",  JSON.stringify(await getFeatureSupport(page)))
    fs.writeFileSync(siteFolder + "/" + "requests",  securityDetails.toString())
    await closeContexts([page, incognito]);
    
    if (unreachableUrls.length !== 0) {
        fs.appendFileSync(unreachableSitesFolder + id + ".txt", unreachableUrls.toString().replace(",", ""));
    }
    process.send(`processed ${url}`);
}

process.on('message', async function(message) {
    puppeteer.use(StealthPlugin());
    console.log('[child] received message from server:', message);
    if (message.includes("http")) {
        checkUrlSw(message);
    }
    else if (message.includes("start")) {
        id = message.split(",")[0]
        if (id == 0) {
            if (!fs.existsSync(outputFolder)) {
                fs.mkdirSync(outputFolder);
            }
            if (!fs.existsSync(unreachableSitesFolder)) {
                fs.mkdirSync(unreachableSitesFolder);
            }
        } else {
            setTimeout(() => {
                console.log(id, "waiting");
            }, 2000);
        }

        var browserArgs = ['--enable-features=NetworkService']

        try {
            browser = await puppeteer.launch({args: browserArgs,
                headless: true});
        } catch (error) {
            console.log('\x1b[31m', id, "Failed to launch browser.")
        }

        if (fs.existsSync(unreachableSitesFolder + id + ".txt")) {
            fs.unlinkSync(unreachableSitesFolder + id + ".txt");
        }
        process.send("start")
    }
    else if (message.includes("stop")) {
        await browser.close();
        process.disconnect();
        exit(0);
    }
    // numChilds = message.split(",")[1]

    // var swsFound = 0;

    // urls = urls.split("\n");
    // urlsPerChild = Math.floor(urls.length / numChilds);
    // console.log(id, urlsPerChild * id, urlsPerChild * id + urlsPerChild, urlsPerChild, urls.length);
    // urls = urls.splice(urlsPerChild * id, urlsPerChild * id + urlsPerChild);

    // const whatRunsPath = require('path').join(__dirname, "/node_modules/chromium/lib/chromium/chrome-linux/1.7.7_0");

    // `--disable-extensions-except=${whatRunsPath}`,
    // `--load-extension=${whatRunsPath}`];

    // var browser;

    // browser.on('disconnected', await puppetee'--enable-features=NetworkService'r.launch({args: [],
    //     headless: true}));
    // for (var i = 0; i < urls.length; i++) {

    //     if (!!await browser.process().signalCode) {
    //         console.log('\x1b[31m', id, "doesnt have browser");
    //         try {
    //             browser = await puppeteer.launch({args: browserArgs,
    //                 headless: true});
    //         } catch (error) {
    //             console.log('\x1b[31m', id, "Failed to launch browser.");
    //             i = i - 1;
    //             continue;
    //         }
    //     }
    //     url = urls[i]
    //     break
    // }

    // process.send({
    //     child       : id,
    //     sites       : i,
    //     swsFound    : swsFound
    // });

});

// parentPort.once('message',
//     message =>

(async () => {
    const browser = await puppeteer.launch({args: ["--disable-dev-shm-usage", "--enable-features=NetworkService"], headless: true, ignoreHTTPSErrors: true});
    var urls = fs.readFileSync("./top-1m.csv", 'utf8' , (err) => {
        if (err) {
            console.error(err)
            return
        }
    });
    await setTimeout(() => {
        console.log("joe")
    }, 10000);
    // console.log(urls)
    console.log(workerData);
    urls = urls.splice(workerData[0], workerData[1]);
    for (var i = 0; i < urls.length; i++) {
        const context = await browser.createIncognitoBrowserContext();

        const page = await context.newPage();
        await page.setCacheEnabled(false);
        url = urls[i]
        url = "https://www." + url.split(",")[1]

        if (i == 5) {
            await browser.close();
            break
        } else if ( i == 0 ) {
            url = "https://pptr.dev/"
        }
        console.log(i, 'Starting detection for', url);
        await page.goto(url, {waitUntil: 'networkidle0'});

        try {
            var sw = await browser.waitForTarget(target => (target.type() === 'service_worker' || target.type() === 'serviceWorker'), { timeout: 1000 })   
        } catch (error) {
            parentPort.postMessage({nosucces: "No sw found for " + url});
            await context.close();
            continue
        }

        console.log("Found sw with source", sw._targetInfo.url);
        var result = await axios.get(sw._targetInfo.url);
        var siteFolder = ouputFolder + sw._targetInfo.url.split("https://")[1].split("/")[0]

        if (!fs.existsSync(siteFolder)){
            fs.mkdirSync(siteFolder);
        }
        fs.appendFileSync(siteFolder + "/sw.js", result.data);
        console.log("doei");
        await context.close();

    }
    await browser.close();
    parentPort.postMessage("Done");
// );
});

