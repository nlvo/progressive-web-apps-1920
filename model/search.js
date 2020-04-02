const fetch = require("./data");
const endpoint = require("./endpoint.js");

// create endpoint based on user input
function createSearchEndpoint (input) {
	const searchInput = input;
	const searchEndpoint = endpoint('comics', `titleStartsWith=${searchInput}`);
	return searchEndpoint;
}

function getAll () {
	const searchResult = createSearchEndpoint;
	return searchResult;
}

module.exports = getAll;