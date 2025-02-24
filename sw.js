self.addEventListener("fetch", function(event) {
    if (event.request.destination === "audio") {
        event.respondWith(fetch(event.request));
    }
});
