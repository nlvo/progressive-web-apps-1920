const fetch = require('./data');
const endpoint = require('./endpoint.js');

// create endpoint based on user input
function createSearchEndpoint (input) {
	const searchInput = input;
	const searchEndpoint = endpoint('comics', `titleStartsWith=${searchInput}`);
	return searchEndpoint;
}

async function getAll (searchInput) {
	const searchEndpoint = createSearchEndpoint(searchInput);
	const searchResults = await fetch(searchEndpoint);
	return searchResults;
}

module.exports = getAll;
