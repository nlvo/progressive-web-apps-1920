const fetch = require('./data.js');
const endpoint = require('./endpoint.js');

// create a new endpoint for character detail
function createCharacterEndpoint (id) {
	const charactersEndpoint = endpoint(`characters/${id}`, '');
	return charactersEndpoint;
}

// create the all characters endpoint
function createCharactersEndpoint () {
	const charactersEndpoint = endpoint('characters', 'orderBy=-modified&limit=8');
	return charactersEndpoint;
}

// get all the comics and return the data
async function getAll () {
	const charactersEndpoint = createCharactersEndpoint();
	const characters = await fetch(charactersEndpoint);
	return characters;
}

// find the correct character with id
async function getOne (id) {
	const charactersEndpoint = createCharacterEndpoint(id);
	const characters = await fetch(charactersEndpoint);
	const findData = characters.find((data) => data.id == id);
	return findData;
	// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// create endpoint for the characters
function createComicsEndpoint (id) {
	const comicsEndpoint = endpoint(`characters/${id}/comics`, '');
	return comicsEndpoint;
}

// get characters from the comics with req.params.id
async function getComics (id) {
	const comicsEndpoint = createComicsEndpoint(id);
	const characterComics = await fetch(comicsEndpoint);
	return characterComics;
	// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

module.exports = {
	getAll,
	getOne,
	getComics,
};
