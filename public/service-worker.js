const CACHE_NAME = 'v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',

    '/assets/images/advantages/SaveUp.gif',

    '/assets/images/dispersion/FabFlow.gif',
    '/assets/images/dispersion/JetFlow.gif',
    '/assets/images/dispersion/MicroFlow.gif',
    '/assets/images/dispersion/NozzFlow.gif',
    '/assets/images/dispersion/OriFlow.gif',
    '/assets/images/dispersion/PerfoFlow.gif',
    '/assets/images/dispersion/SonicFlow.gif',

    '/assets/images/home/advantages.gif',
    '/assets/images/home/dispersion.gif',
    '/assets/images/home/full-brochure.gif',
    '/assets/images/home/suspension.gif',
    '/assets/images/home/why.gif',

    '/assets/images/suspension/1.png',
    '/assets/images/suspension/01.png',
    '/assets/images/suspension/2.png',
    '/assets/images/suspension/02.png',
    '/assets/images/suspension/3.png',
    '/assets/images/suspension/03.png',
    '/assets/images/suspension/4.png',
    '/assets/images/suspension/04.png',
    '/assets/images/suspension/5.png',
    '/assets/images/suspension/05.png',
    '/assets/images/suspension/6.png',
    '/assets/images/suspension/06.png',
    '/assets/images/suspension/7.png',
    '/assets/images/suspension/07.png',
    '/assets/images/suspension/8.png',
    '/assets/images/suspension/08.png',
    '/assets/images/suspension/11.png',
    '/assets/images/suspension/011.png',
    '/assets/images/suspension/11A.png',
    '/assets/images/suspension/011A.png',
    '/assets/images/suspension/12.png',
    '/assets/images/suspension/012.png',
    '/assets/images/suspension/013.png',


    '/assets/images/why-fabric/footer.png',
    '/assets/images/why-fabric/head.png',

    '/assets/images/logo.png',
    '/assets/images/home.png',
    '/assets/images/flag.gif',

    '/assets/videos/bg-video.mp4',

    '/assets/ducting.pdf',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
})


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

// self.addEventListener('fetch', event => {
//     event.respondWith(
//         fetch(event.request)
//             .then(response => {
//                 const responseClone = response.clone();
//                 caches.open(CACHE_NAME)
//                     .then(cache => {
//                         cache.put(event.request.url, responseClone);
//                     });
//                 return response;
//             }).catch(error => caches.match(event.request).then(response => response))
//     )
// })