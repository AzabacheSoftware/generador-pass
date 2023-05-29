self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('generador-contrasenas').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/estilos.css',
          '/js/script.js',
          '/img/icon.png',
          '/js/main.js',
          '/img/logo_pass.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  