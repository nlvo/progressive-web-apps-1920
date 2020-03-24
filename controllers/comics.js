const fetch = require('./data');
const endpoint = require('./endpoint.js');

// create new endpoint for all comics
function createEightEndpoint(pages) {
	const offset = 0;
	const limit = 8;
	const total = pages * limit;
	const comicsEndpoint = endpoint('comics', `dateDescriptor=thisMonth&orderBy=-onsaleDate&limit=${total}&offset=${offset}`);
	return comicsEndpoint;
}

// get all comics and return when available
async function getEight(pages) {
	const comicsEndpoint = createEightEndpoint(pages);
	const comics = await fetch(comicsEndpoint);
	return comics;
}

let pages = 1;

// create new endpoint for all comics
function createComicsEndpoint() {
	pages++;
	const maxComics = 80;
	const comics = 8;
	const amountComics = pages * comics;
	const startFrom = amountComics - comics;
	const pageLimit = amountComics / pages;
	if (amountComics < maxComics) {
		const comicsEndpoint = endpoint('comics', `dateDescriptor=thisMonth&orderBy=-onsaleDate&limit=${pageLimit}&offset=${startFrom}`);
		return comicsEndpoint;
	}
}

// get all comics and return when available
async function getMore(req, res) {
	const comicsEndpoint = createComicsEndpoint();
	const comics = await fetch(comicsEndpoint);
	res.render('more', {
		layout: false,
		comics,
	});
}

// render comics when data is available
async function showAll(req, res) {
	const page = req.query.id || 1;
	const comics = await getEight(page);
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
// const pages = req.query.page || 1;
// console.log(req.query.page)
// const comicsEndpoint = endpoint('comics', `dateDescriptor=thisMonth&orderBy=-onsaleDate&offset=${offset}&limit=${pages * limit}`);