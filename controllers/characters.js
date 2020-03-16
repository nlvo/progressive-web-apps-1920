const fetch = require('./data');
const endpoint = require('./endpoint.js');

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

// render all the characters when the data is available
async function showAll (req, res) {
	const characters = await getAll();
	res.render('main', { characters, charactersPageTitle: 'All characters' });
}

module.exports = {
	getAll,
	showAll,
};
