const fetch = require('./data');
const endpoint = require('./endpoint.js');

// create new endpoint for all comics
function createComicsEndpoint () {
	const comicsEndpoint = endpoint('comics', 'dateDescriptor=thisMonth&orderBy=-onsaleDate&limit=8');
	return comicsEndpoint;
}

// get all comics and return when available
async function getAll () {
	const comicsEndpoint = createComicsEndpoint();
	const comics = await fetch(comicsEndpoint);
	return comics;
}

// render comics when data is available
async function showAll (req, res) {
	const comics = await getAll();
	res.render('main', { comics, comicsPageTitle: 'All comics' });
}

module.exports = {
	showAll,
	getAll,
};
