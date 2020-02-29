const cacheName = 'site-static';

const assets = [
    '/',
    '/index.html',
    '/About.js',
    '/About.js.map',
    '/bundle.js',
    '/bundle.js.map',
    '/common.js',
    '/common.js.map',
    '/Home.js',
    '/Home.js.map',
    '/PageNotFound.js',
    '/PageNotFound.js.map',
    '/Projects.js',
    '/Projects.js.map',
    '/Post.js',
    '/Post.js.map',
    '/vendor.js',
    '/vendor.js.map',
    '/sw.js',
    '/manifest.json',
    '/images/back-button.svg',
    '/images/big-image.jpeg',
    '/images/close-button.svg',
    '/images/github.svg',
    '/images/linkedin.svg',
    '/images/small-image.jpeg',
    '/images/icons/72x72.png',
    '/images/icons/96x96.png',
    '/images/icons/128x128.png',
    '/images/icons/144x144.png',
    '/images/icons/152x152.png',
    '/images/icons/192x192.png',
    '/images/icons/384x384.png',
    '/images/icons/512x512.png'
];

self.addEventListener('install', e => {
    // pre-cache assets
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', e => {
    console.log('service worker has been activated');
});

self.addEventListener('fetch', e => {
    // responsd with something from the cache, if present,
    // else make the fetch call

    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request);
        })
    );
});
