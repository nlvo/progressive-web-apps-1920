if ('serviceWorker' in navigator) {
	navigator
		.serviceWorker
		.register(
			'/js/sw.js'
		)
		.then((reg) => {
			console.log('working');
		});
}