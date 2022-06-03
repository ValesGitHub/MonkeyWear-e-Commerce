self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./", 
                "./index.html", 
                "./src/style.css", 
                "./src/index.js",
                "./images/logo416.png", 
                "./service_worker/script.js", 
                "./images/tipa.jpg", 
                "./images/tipo.jpg",
                "./src/pages/man_side/style.css",
                "./src/pages/man_side/manscript.js",
                "./src/css/pagestyle.css",
                "./src/scripts/script.js",
                "./manpage.html",
                "./src/pages/woman_side/style.css",
                "./src/pages/woman_side/womanscript.js",
                "./womanpage.html",
                "./manifest.json",
                "./images/account.png",
                "./images/heart.png",
                "./images/magnify.png",
                "./images/shopping.png",
                "./src/scripts/cookiescript.js",
                "./src/pages/man_side/manshoes.html"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});