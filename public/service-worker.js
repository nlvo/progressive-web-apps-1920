self.addEventListener('install', event => {
	event.waitUntil(
		caches
		.open('v1')
		.then(cache => {
				return cache
					.addAll([
						'/img/marvel-logo.svg',
						'/favicon.png',
						'/css/style.min.css',
						'/js/main.min.js',
					])
					.then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches
			.match(event.request)
			.then(response => {
				if(response) {
					return response
				}
				return fetch(event.request)
			})
	)
});