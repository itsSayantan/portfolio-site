const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';

const assets = [
    '/',
    '/index.html',
    '/bundle.js',
    '/common.js',
    '/Home.js',
    '/PageNotFound.js',
    '/vendor.js',
    '/sw.js',
    '/manifest.json',
    '/images/close-button.svg',
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
    e.waitUntil(
        Promise.all([
            // precahce assets
            caches.open(staticCacheName).then(cache => {
                return cache.addAll(assets);
            })
        ])
    );
});

self.addEventListener('activate', e => {
    console.log('service worker has been activated');

    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(
                        key =>
                            key !== staticCacheName && key !== dynamicCacheName
                    )
                    .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', e => {
    // responsd with something from the cache, if present,
    // else make the fetch call
    if (e.request.url.match(/^http/)) {
        e.respondWith(
            caches.match(e.request).then(cacheRes => {
                return (
                    cacheRes ||
                    fetch(e.request).then(fetchResponse => {
                        return caches.open(dynamicCacheName).then(cache => {
                            cache.put(e.request, fetchResponse.clone());

                            return fetchResponse;
                        });
                    })
                );
            })
        );
    }
});
