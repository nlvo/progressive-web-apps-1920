self.addEventListener('install', event => {
	console.log('install');
	event.waitUntil(
		caches
		.open('v1')
		.then(cache => {
				return cache
					.addAll([
						'/',
						'/img/marvel-logo.svg',
						'/img/favicon.png',
						'/css/styles.css',
						'/fonts/icomoon.ttf',
						'/js/main.js',
					])
					.then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('activate', event => {
	console.log('activating')
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