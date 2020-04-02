const fetch = require('./data');
const endpoint = require('./endpoint.js');

// create new endpoint for 8 comics
function createEightEndpoint () {
	const offset = 0;
	const limit = 8;
	const comicsEndpoint = endpoint('comics', `dateDescriptor=thisMonth&orderBy=-onsaleDate&limit=${limit}&offset=${offset}`);
	return comicsEndpoint;
}

// create new endpoint for all comics
function createComicsEndpoint (pageNumber) {
	const comics = 8;
	const totalComics = pageNumber * comics;
	const comicsEndpoint = endpoint('comics', `dateDescriptor=thisMonth&orderBy=-onsaleDate&limit=${comics}&offset=${totalComics}`);
	return comicsEndpoint;
}

function createComicEndpoint (id) {
	const comicEndpoint = endpoint(`comics/${id}`, '');
	return comicEndpoint;
}

// create endpoint for the characters
function createCharactersEndpoint (id) {
	const charactersEndpoint = endpoint(`comics/${id}/characters`, '');
	return charactersEndpoint;
}

// find the correct comic with req.params.id
async function getOne (id) {
	const comicEndpoint = createComicEndpoint(id);
	const comics = await fetch(comicEndpoint);
	const findData = comics.find((data) => data.id == id);
	return findData;
	// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// get characters from the comics with req.params.id
async function getCharacters (id) {
	const charactersEndpoint = createCharactersEndpoint(id);
	const comicsCharacters = await fetch(charactersEndpoint);
	return comicsCharacters;
	// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// get all eight comics and return when available
async function getEight () {
	const comicsEndpoint = createEightEndpoint();
	const comics = await fetch(comicsEndpoint);
	return comics;
}

// get 8 more comics and return when available
async function getMore (id) {
	const comicsEndpoint = createComicsEndpoint(id);
	const comics = await fetch(comicsEndpoint);
	return comics;
}

module.exports = {
	getEight,
	getMore,
	getOne,
	getCharacters,
};
