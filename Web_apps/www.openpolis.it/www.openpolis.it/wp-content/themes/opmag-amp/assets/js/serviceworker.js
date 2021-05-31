var CACHE_NAME = 'opmag-site-cache-v1';
var urlsToCache = [
    '/',
    '/wp-content/themes/opmag-amp/assets/js/main.js',
    '/wp-content/themes/opmag-amp/assets/js/headroom.min.js',
    '/wp-content/themes/opmag-amp/assets/js/opmag_pwa.min.js',
    '/wp-content/themes/opmag-amp/assets/js/opmag_viewport.min.js'
];

self.addEventListener('install', function(event) {

    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});