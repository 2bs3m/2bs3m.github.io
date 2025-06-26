// service-worker.js

const CACHE_NAME = '2bs3m-ecommerce-cache-v1.2'; // Increment version to force update
const urlsToCache = [
  '/',
  '/offline.html',
  '/index.html',
  '/manifest.json', // Updated manifest name
  // Add paths to your main JS and CSS bundles if they are consistently named
  // For Vite/CRA, these names often include hashes, so this strategy needs adjustment
  // or use a build tool plugin (e.g., workbox) for precaching.
  // For now, we cache core assets and rely on runtime caching for others.
  '/index.tsx', // This won't be directly fetched by browser but is part of the build.
                 // Better to cache actual built JS files like main.js, chunk.js etc.
                 // This entry is more symbolic for a simple setup.
  '/favicon.ico',
  // New icon paths (assuming they are at the root)
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  // Add other critical assets like fonts if any
  '/index.css',
  // 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' // Example
];

// Placeholder for actual built assets - this would be populated by a build tool
const DYNAMIC_ASSETS_TO_PRECACHE = [
  // '/static/js/bundle.js', 
  // '/static/css/main.chunk.css'
];

self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      const allUrlsToCache = [...urlsToCache, ...DYNAMIC_ASSETS_TO_PRECACHE];
      return cache.addAll(allUrlsToCache.map(url => new Request(url, { cache: 'reload' }))) // Force reload from network during install
        .catch(error => {
          console.error('[ServiceWorker] Failed to cache urls:', error, allUrlsToCache);
        });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // console.log('[ServiceWorker] Fetching:', event.request.url);
  // Cache-First strategy for navigation and assets
  // Network-first for API calls (if any)
  
  // For navigation requests, try network first, then cache, then offline page
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(event.request.url) || await cache.match('/index.html');
          if (cachedResponse) {
            return cachedResponse;
          }
          // Ajoute ce fallback :
          const offlinePage = await cache.match('/offline.html');
          if (offlinePage) return offlinePage;
          return new Response("<h1>Vous êtes hors ligne</h1><p>Vérifiez votre connexion internet.</p>", {
            headers: { 'Content-Type': 'text/html' }
          });
        }
      })()
    );
    return;
  }

  // For other requests (assets like CSS, JS, images)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // console.log('[ServiceWorker] Returning from cache:', event.request.url);
        return cachedResponse;
      }

      // If not in cache, fetch from network, cache it, and return it
      return fetch(event.request).then((networkResponse) => {
        // console.log('[ServiceWorker] Fetching from network and caching:', event.request.url);
        // Check if we received a valid response
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic' && networkResponse.type !== 'cors') {
          return networkResponse;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        const responseToCache = networkResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          // Cache only GET requests for assets. Don't cache API calls this way unless specifically designed.
          if (event.request.method === 'GET' && (event.request.url.startsWith('http') || event.request.url.startsWith('/'))) {
            // Be careful about caching everything.
            // Example: Cache images, fonts, main static assets.
            // Avoid caching API responses here unless you have a stale-while-revalidate strategy.
            const url = new URL(event.request.url);
            if (url.pathname.match(/\.(?:png|jpg|jpeg|svg|gif|webp|css|js|woff2|woff|ttf|eot|webmanifest)$/i) || urlsToCache.includes(url.pathname)) {
                 cache.put(event.request, responseToCache);
            }
          }
        });
        return networkResponse;
      }).catch(error => {
        console.error('[ServiceWorker] Fetch failed; returning offline fallback if available.', error);
        // Optional: return a fallback image or asset if specific types fail
        // if (event.request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
        //   return caches.match('/placeholder-image.png');
        // }
      });
    })
  );
});

// Message listener for skipWaiting
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});