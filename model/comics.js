const fetch = require('./data');
const endpoint = require('./endpoint.js');

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

// get 8 more comics and return when available
async function getMore (id) {
	const comicsEndpoint = createComicsEndpoint(id);
	const comics = await fetch(comicsEndpoint);
	return comics;
}

// let pages = 0;

function getPageNumber (number) {
	let pages = Number(number);
	const maxComics = 80;
	const comics = 8;
	const totalComics = pages * comics;
	if (totalComics < maxComics) {
		pages += 1;
	}
	return pages;
}


// get 8 more comics and return when available
async function getNextPage (number) {
	const comicsEndpoint = createComicsEndpoint(number);
	const comics = await fetch(comicsEndpoint);
	return comics;
}

module.exports = {
	getMore,
	getOne,
	getCharacters,
	getNextPage,
	getPageNumber,
};
