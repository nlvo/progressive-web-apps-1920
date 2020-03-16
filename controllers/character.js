const fetch = require('./data');
const endpoint = require('./endpoint.js');

// create a new endpoint for character detail
function createCharactersEndpoint (id) {
	const charactersEndpoint = endpoint(`characters/${id}`, '');
	return charactersEndpoint;
}

// find the correct character with id
async function getCharacter (id) {
	const charactersEndpoint = createCharactersEndpoint(id);
	const characters = await fetch(charactersEndpoint);
	const findData = characters.find((data) => data.id == id);
	return findData;
	// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// render character detail if data is available
async function showCharacter (req, res) {
	const id = req.params.id;
	const character = await getCharacter(id);
	res.render('main', {
		character,
	});
}

module.exports = showCharacter;
