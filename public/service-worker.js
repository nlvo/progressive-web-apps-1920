self.addEventListener('install', event => {
	console.log('install');
	self.skipWaiting();
});

self.addEventListener('activate', event => {
	console.log('activating')
	event.waitUntil(clients.claim());
});