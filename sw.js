const VERSION = 'v1';
const CACHE_NAME = `rss-only-link-blog-${VERSION}`;
const APP_DIR = '/rss-only-link-blog-app';
const APP_STATIC_RESOURCES = [
    '/',
    '/index.html',
    '/style.css',
    '/icon.svg',
    '/icon1.png',
    '/icon5.png',
    '/app.js',
    '/sw.js'
].map((path) => {
    return APP_DIR + path;
});

self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const names = await caches.keys();
        await Promise.all(names.map((name) => {
            if (name !== CACHE_NAME) {
                return caches.delete(name);
            }
        }));
        await clients.claim();
    })());
});

self.addEventListener('fetch', (event) => {
    // Return index.html
    if (event.request.mode === 'navigate') {
        event.respondWith(caches.match(APP_DIR + '/'));
        return;
    }

    // Return every other request
    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request.url);
        // Return cached file
        if (cachedResponse) {
            return cachedResponse;
        }
        // Return 404
        return new Response(null, {status: 404});
    })());
});
