self.addEventListener('install', event => {
	event.waitUntil(
		caches
			.open('v1')
			.then(async (cache) => {
				await cache
					.addAll([
						'/offline',
						'/img/marvel-logo.svg',
						'/img/avengers-logo.svg',
						'/css/style.min.css',
					]);
				return self.skipWaiting();
			}),
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches
			.match(event.request)
			.then((response) => {
				if (response) {
					return response;
				}
				return fetch(event.request);
			}),
	);
});