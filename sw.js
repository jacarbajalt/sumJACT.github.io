self.addEventListener('install', event => {
    // Perform install steps
    console.log('SW: Instalando SW');
    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);
    });
    event.waitUntil(instalacion);
});

self.addEventListener('activate', event => {
    // Perform activate steps
    console.log('SW: Activo y listo para controlar la app');
}
);

self.addEventListener('fetch', event => {
    console.log('SW: ', event.request.url);
    const resp = fetch(event.request)
        .then(resp => {
            return resp.ok ? resp : fetch('img/1.jpg');
        }
        );
    event.respondWith(resp);
    //Boton de instalar
});
