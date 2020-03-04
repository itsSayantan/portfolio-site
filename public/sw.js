importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
);

import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    /.(?:jpg|jpeg|png|svg)$/,
    new CacheFirst({
        cacheName: 'images-v1'
    })
);
