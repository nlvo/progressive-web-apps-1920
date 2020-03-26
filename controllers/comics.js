const fetch = require('./data');
const endpoint = require('./endpoint.js');

// create new endpoint for all comics
function createEightEndpoint () {
	const offset = 0;
	const limit = 8;
	const comicsEndpoint = endpoint('comics', `dateDescriptor=thisMonth&orderBy=-onsaleDate&limit=${limit}&offset=${offset}`);
	return comicsEndpoint;
}

// get all comics and return when available
async function getEight () {
	const comicsEndpoint = createEightEndpoint();
	const comics = await fetch(comicsEndpoint);
	return comics;
}

// create new endpoint for all comics
function createComicsEndpoint (pageNumber) {
	const comics = 8;
	const totalComics = pageNumber * comics;
	const comicsEndpoint = endpoint('comics', `dateDescriptor=thisMonth&orderBy=-onsaleDate&limit=${comics}&offset=${totalComics}`);
	return comicsEndpoint;
}

// get all comics and return when available
async function getMore (req, res) {
	const comicsEndpoint = createComicsEndpoint(req.query.id);
	const comics = await fetch(comicsEndpoint);
	res.render('more', {
		layout: false,
		comics,
	});
}

// render comics when data is available
async function showAll (req, res) {
	const comics = await getEight();
	res.render('main', {
		comics,
		comicsPageTitle: 'All comics',
	});
}

module.exports = {
	showAll,
	getMore,
	getEight,
};
