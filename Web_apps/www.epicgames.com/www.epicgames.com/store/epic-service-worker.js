/* eslint-disable */
// epic-sw.txt
// built January 27 at 7:13pm HQ time
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes

const cdnHost = 'https://static-assets-prod.epicgames.com/static/';
const precacheManifest = [{
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/main.diesel-site.fda21a2ed7e9ab205817.js"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/webAppStyles.diesel-site.0c130bbcba001b8ed96d.css"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/webAppStyles.diesel-site.44d733688f5786d3b8d1.js"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/4fa9a4277a63ffa8e703749da4b8ecca.eot"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/e0aa9ff38c646873189b25adf2216e24.woff"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/e6c685200f5521b6574f7099061e59e1.ttf"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/ee389eb66dfe29b70153654a431092a2.svg"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/launcherAppStyles.diesel-site.ac29205c8fde6d60f813.css"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/launcherAppStyles.diesel-site.02315444f54b10a0da5a.js"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/4fa9a4277a63ffa8e703749da4b8ecca.eot"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/e0aa9ff38c646873189b25adf2216e24.woff"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/e6c685200f5521b6574f7099061e59e1.ttf"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/ee389eb66dfe29b70153654a431092a2.svg"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/polyfill.diesel-site.2f04cf3f4fce68d3a230.js"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/fonts.diesel-site.766f7567de388faaad22.css"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/fonts.diesel-site.e25db7d7b337d1b71a19.js"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/751.diesel-site.a75180f8e446da547d18.css"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/751.diesel-site.a8b07725a744c87424bf.js"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/bf386a55a31f86ef97c23ebc718192b4.png"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/bea3397476a96b6e2d2ddcaa209dbf06.jpg"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/e478aef429408f0f0a5779b820559732.gif"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/6636fdbd1e4ad70952270cb757d8eb7d.svg"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/584.diesel-site.1681f5430c6a1099746b.js"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/0f70ca2871644a7088a012669e07299c.svg"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/bea3397476a96b6e2d2ddcaa209dbf06.jpg"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/loadable-stats.json"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/bf386a55a31f86ef97c23ebc718192b4.png"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/dabe44acadaefe22357acd28244b1933.svg"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/e6c685200f5521b6574f7099061e59e1.ttf"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/e0aa9ff38c646873189b25adf2216e24.woff"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/4fa9a4277a63ffa8e703749da4b8ecca.eot"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/4553982d7272dd810fcae949cd09e912.png"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/e478aef429408f0f0a5779b820559732.gif"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/25c285e020572b4f76b770d6cca272ec.png"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/8a124e07162305cd8c3e29e108a38022.png"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/a7605d515bbe8e88b05a4d2b31a92e6f.jpg"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/548edd23fcf5d157ca443ae24f6b2e1a.svg"
}, {
    "url": "https://static-assets-prod.epicgames.com/epic-store/static/webpack/7ccde556bbb16876d199091c7c103157.png"
}];
const navigationFallback = '/store/offline-cache';
const debug = false;
const shouldSkipWaiting = true;
const networkTimeoutSeconds = 10000;

// EPIC EDITED
importScripts(`${cdnHost}workbox-v3.3.1/workbox-sw.js`);

workbox.setConfig({
    modulePathPrefix: `${cdnHost}workbox-v3.3.1`,
    // ,
    // debug, // boolean that enables debug logging in the console
});

// This will trigger the importScripts() for workbox.strategies, workbox.cacheableResponse, and workbox.expiration and their dependencies:
workbox.loadModule('workbox-core');
workbox.loadModule('workbox-strategies');
workbox.loadModule('workbox-cache-expiration');
workbox.loadModule('workbox-cacheable-response');
workbox.loadModule('workbox-precaching');

// if there is no revision property, we just want the url, because the url should have a hash in it's filename
workbox.precaching.precacheAndRoute(
    precacheManifest.map((entry) => (entry.revision ? entry : entry.url))
);

const runtimeCacheName = workbox.core.cacheNames.runtime;
const precacheCacheName = workbox.core.cacheNames.precache;
const offlineCacheName = 'offline-page';

const isImageRequest = new RegExp('.(?:png|gif|jpg|jpeg|svg)$');
const isVideoRequest = new RegExp('.(?:mp4|webm)$');
const isAssetRequest = new RegExp('.(?:js|css)$');
const isBlobRequest = new RegExp('.(^blob:)$');

const isNavigationRequest = ({
    event,
    url
}) => {
    return event.request.mode === 'navigate';
};

// only writes to console if this is running on a non-prod environment
const debugLog = (msg) => {
    if (debug) console.log(msg);
};

const offlineCacheFallback = async () => {
    const offlineCacheResponse = await caches.match(navigationFallback, {
        cacheName: offlineCacheName,
    });
    debugLog('offline cache response loaded from cache\nreturning offline cache response');
    if (offlineCacheResponse && offlineCacheResponse.ok) {
        debugLog(`offline cache response is .ok\n returning it`);
        return offlineCacheResponse.clone();
    }
    return new Response(null, {
        status: 500,
        statusText: 'Failed to load offline page from service worker.',
    });
};

const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

self.addEventListener('install', (event) => {
    console.log('service worker installed');

    event.waitUntil(
        caches.open(offlineCacheName).then((cache) => {
            return fetch(navigationFallback, {
                credentials: 'omit',
                redirect: 'follow'
            }).then(
                (resp) => {
                    // cache offline-page but hit 4xx/5xx error, not cache error page and finish install
                    if (resp.status > 399 && resp.status < 600) {
                        return Promise.resolve('not caching 4xx/5xx');
                    }
                    // we should create a new response here since the offline-cache page would be redirected,
                    // otherwise it will cause site to be unreachable when we use offline cache response.
                    return cache.put(navigationFallback, new Response(resp.body));
                }
            );
        })
    );
    if (shouldSkipWaiting) {
        debugLog('activating service worker now');
        self.skipWaiting();
    }
});

self.addEventListener('activate', (_) => {
    console.log('service worker activated!');
});

workbox.routing.registerRoute(
    isImageRequest,
    new workbox.strategies.CacheFirst({
        cacheName: 'epic-image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
                purgeOnQuotaError: true,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    isAssetRequest,
    new workbox.strategies.CacheFirst({
        cacheName: 'epic-asset-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                purgeOnQuotaError: true,
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [200], // 0 for cors from code example, probably not necessary
            }),
        ],
    })
);

workbox.routing.registerRoute(isVideoRequest, new workbox.strategies.NetworkOnly());

workbox.routing.registerRoute(isBlobRequest, new workbox.strategies.NetworkOnly());

workbox.routing.registerRoute(isNavigationRequest, ({
    event
}) => {
    event.respondWith(
        (async function getNavigateResponse() {
            const networkOnly = new workbox.strategies.NetworkOnly();
            try {
                const promises = [networkOnly.handle({
                    event
                }), timeout(networkTimeoutSeconds)];
                const response = await Promise.race(promises);
                if (!response) {
                    throw new Error(
                        `Timed out the network response after ${networkTimeoutSeconds} seconds.`
                    );
                }
                if (response.status > 499) {
                    return await offlineCacheFallback();
                }
                return response.clone();
            } catch (networkFirstError) {
                return await offlineCacheFallback();
            }
        })()
    );
});