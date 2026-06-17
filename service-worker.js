const CACHE_NAME = "mangostin-v1";

const urlsToCache = [
    "./",
    "./index.html",
    "./style.css",
    "./icon-192.png",
    "./icon-512.png",
    "./Guns N' Roses - November Rain.mp3",

    "./src/foto1.jpg",
    "./src/foto2.jpg",
    "./src/foto3.jpg",
    "./src/foto4.jpg",
    "./src/foto5.jpg",
    "./src/foto6.jpg",

    "./src/fruit1.png",
    "./src/fire.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});