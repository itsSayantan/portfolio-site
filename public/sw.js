const cacheName = 'site-static';

const assets = [
    '/',
    '/index.html',
    '/About.js',
    '/bundle.js',
    '/common.js',
    '/Home.js',
    '/PageNotFound.js',
    '/Projects.js',
    '/Post.js',
    '/vendor.js',
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
    '/images/icons/512x512.png',
    'https://fonts.googleapis.com/css?family=Sigmar+One&display=swap',
    'https://fonts.googleapis.com/css?family=Roboto&display=swap',
    'https://fonts.googleapis.com/css?family=Crimson+Text:400&display=swap',
    'https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap'
];

self.addEventListener('install', e => {
    // pre-cache assets
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(assets);
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
