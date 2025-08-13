const CACHE_NAME = 'json-formatter-v1';
const urlsToCache = [
  '/', 
  '/?lang=tr',
  '/?lang=en', 
  '/icon.ico',
  '/icon.png',
  '/icon.svg',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/maskable-icon-512x512.png',
  '/site.webmanifest',
  '/sitemap.xml',
  '/screenshots/desktop-1280x720.png',
  '/screenshots/mobile-750x1334.png', 
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});