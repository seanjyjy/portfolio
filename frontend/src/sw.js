// Used for filtering matches based on status code, header, or both
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { clientsClaim } from "workbox-core";
import {
  precacheAndRoute,
  matchPrecache,
  cleanupOutdatedCaches,
} from "workbox-precaching";
import { registerRoute, setCatchHandler } from "workbox-routing";
import {
  CacheFirst,
  StaleWhileRevalidate,
  NetworkFirst,
} from "workbox-strategies";
// Used to limit entries in cache, remove entries after a certain period of time
import { ExpirationPlugin } from "workbox-expiration";
import {
  googleFontsCache,
  imageCache,
  staticResourceCache,
  pageCache,
  warmStrategyCache,
} from "workbox-recipes";

// self.addEventListener("install", (event) => {
//   self.skipWaiting();
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(self.clients.claim());
//   self.registration.unregister().then(() => {
//     console.log("SW  - unregistered old service worker");
//   });
// });
clientsClaim();
self.skipWaiting();
cleanupOutdatedCaches();

// cache-first auto used which is wanted
// Ensure your build step is configured to include /offline.html as part of your precache manifest.
precacheAndRoute(self.__WB_MANIFEST);

// const strategy = new CacheFirst();
// const urls = ["/offline.html"];

// warmStrategyCache({ urls, strategy });

googleFontsCache();
staticResourceCache();
imageCache();
// registerRoute(
//   new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
//   new CacheFirst({
//     cacheName: "google-fonts",
//     plugins: [
//       new ExpirationPlugin({
//         maxEntries: 30,
//       }),
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// );

// registerRoute(
//   ({ url }) => url.origin === "https://fonts.googleapis.com",
//   new StaleWhileRevalidate({
//     cacheName: "google-fonts-stylesheets",
//   })
// );

// registerRoute(
//   ({ url }) => url.origin === "https://fonts.gstatic.com",
//   new CacheFirst({
//     cacheName: "google-fonts-webfonts",
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//       new ExpirationPlugin({
//         maxAge: 60 * 60 * 24 * 365,
//         maxEntries: 30,
//       }),
//     ],
//   })
// );

// const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
// registerRoute(
//   // Return false to exempt requests from being fulfilled by index.html.
//   ({ request, url }) => {
//     // If this isn't a navigation, skip.
//     if (request.mode !== 'navigate') {
//       return false;
//     }

//     // If this is a URL that starts with /_, skip.
//     if (url.pathname.startsWith('/_')) {
//       return false;
//     }

//     // If this looks like a URL for a resource, because it contains
//     // a file extension, skip.
//     if (url.pathname.match(fileExtensionRegexp)) {
//       return false;
//     }

//     // Return true to signal that we want to use the handler.
//     return true;
//   },
//   createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html'),
// );

// Cache page navigations (html) with a Network First strategy
// registerRoute(
//   // Check to see if the request is a navigation to a new page
//   ({ request }) => request.mode === "navigate",
//   // Use a Network First caching strategy
//   new NetworkFirst({
//     networkTimeoutSeconds: 3,
//     // Put all cached files in a cache named 'pages'
//     cacheName: "pages",
//     plugins: [
//       // Ensure that only requests that result in a 200 status are cached
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// );

// // TODO: change maxAgeSeconds
// registerRoute(
//   ({ request }) => request.destination === "image",
//   new CacheFirst({
//     cacheName: "images",
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxEntries: 200,
//         maxAgeSeconds: 60, // to change in the future
//       }),
//     ],
//   })
// );

// // TODO: might remove
// registerRoute(
//   ({ request }) =>
//     request.destination === "script" || request.destination === "style",
//   new StaleWhileRevalidate({
//     cacheName: "assets",
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// );

// pageCache();

// Cache user profile images from linkedin
registerRoute(
  new RegExp("https://media-exp1.licdn.com/dms/image/.*"),
  new StaleWhileRevalidate({
    cacheName: "profile-images",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 86400, // 1 day
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Cache videos from cloudinary
registerRoute(
  new RegExp("https://res.cloudinary.com/dhxecnaor/video/upload/.*"),
  new StaleWhileRevalidate({
    cacheName: "videos",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 86400, // 1 day
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
