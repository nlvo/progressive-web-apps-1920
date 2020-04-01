// install worker and open the cache to add files
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

// installs and takes control on the first load
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
				return fetch(event.request)
					.catch(err => caches.match('/offline'));
			}),
	);
});

// offline line
// https://dev.to/saurabhdaware/make-websites-work-offline-part-1-what-are-service-workers-and-how-to-get-a-custom-app-install-button-on-the-website-4a8#load-offline-page