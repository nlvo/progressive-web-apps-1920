const fetch = require('./data');
const endpoint = require('./endpoint.js');

function createComicsEndpoint (id) {
	const comicsEndpoint = endpoint(`comics/${id}`, '');
	return comicsEndpoint;
}

// find the correct comic with req.params.id
async function getComic (id) {
	const comicsEndpoint = createComicsEndpoint(id);
	const comics = await fetch(comicsEndpoint);
	const findData = comics.find((data) => data.id == id);
	return findData;
	// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// create endpoint for the characters
function createCharactersEndpoint (id) {
	const charactersEndpoint = endpoint(`comics/${id}/characters`, '');
	return charactersEndpoint;
}

// get characters from the comics with req.params.id
async function getComicCharacters (id) {
	const charactersEndpoint = createCharactersEndpoint(id);
	const comicsCharacters = await fetch(charactersEndpoint);
	return comicsCharacters;
	// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// render page when data is available
async function showComic (req, res) {
	const id = req.params.id;
	const comic = await getComic(id);
	const comicCharacters = await getComicCharacters(id);
	res.render('main', { comic, comicCharacters });
}

module.exports = showComic;
