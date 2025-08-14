const CACHE_NAME = 'json-formatter-v1'; // Versiyon numarasını her güncellemede artırın
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

// Install event - yeni cache oluştur
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Yeni service worker'ı hemen aktif et
        return self.skipWaiting();
      })
  );
});

// Activate event - eski cache'leri temizle
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Tüm client'ları yeni service worker ile yönet
      return self.clients.claim();
    })
  );
});

// Fetch event - cache first strategy with update check
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache'den dön, ama arka planda güncelleme kontrol et
        if (response) {
          // Arka planda güncellenmiş versiyon var mı kontrol et
          checkForUpdates(event.request);
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Güncelleme kontrolü fonksiyonu
function checkForUpdates(request) {
  fetch(request)
    .then(response => {
      if (response && response.status === 200) {
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(request, response.clone());
          });
      }
    })
    .catch(() => {
      // Network hatası - sessizce geç
    });
}

// Client'lara güncelleme mesajı gönder
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  // Tüm client'ları yeniden yükle
  if (event.data && event.data.type === 'RELOAD_ALL_CLIENTS') {
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({ type: 'FORCE_RELOAD' });
      });
    });
  }
});

// Periyodik güncelleme kontrolü (eğer Background Sync destekleniyorsa)
self.addEventListener('sync', function(event) {
  if (event.tag === 'update-check') {
    event.waitUntil(
      checkForAppUpdates()
    );
  }
});

function checkForAppUpdates() {
  return fetch('/api/version')
    .then(response => response.json())
    .then(data => {
      // Server'dan versiyon bilgisi al ve karşılaştır
      const currentVersion = CACHE_NAME;
      if (data.version !== currentVersion) {
        // Yeni versiyon var - client'lara bildir
        return self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({
              type: 'UPDATE_AVAILABLE',
              version: data.version
            });
          });
        });
      }
    })
    .catch(() => {
      // Hata durumunda sessizce geç
    });
}