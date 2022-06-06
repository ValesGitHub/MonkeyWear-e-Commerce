const cacheName = "v1 - cache";

self.addEventListener("install", e => {
    console.log("SW: installed");
});

self.addEventListener("activate", e => {
    console.log("SW: activated");

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        fetch(e.request)
            .then(res => {
                const resClone = res.clone();
                caches
                    .open(cacheName)
                    .then(cache => {
                        cache.put(e.request, resClone);
                    });
                return res;
            }).catch(err => caches.match(e.request).then(res => res))
    );
});