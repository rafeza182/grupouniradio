self.addEventListener("fetch", function(event) {
    if (event.request.destination === "audio") {
        event.respondWith(fetch(event.request));
    }
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("uniradio-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/script.js",
        "/icons/icon-192x192.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
