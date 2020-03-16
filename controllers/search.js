const fetch = require('./data');
const endpoint = require('./endpoint.js');

// create endpoint based on user input
function createSearchEndpoint (input) {
	const searchInput = input;
	const searchEndpoint = endpoint('comics', `titleStartsWith=${searchInput}`);
	return searchEndpoint;
}


async function showSearchResults (req, res) {
	const searchInput = req.query.search;
	const searchEndpoint = createSearchEndpoint(searchInput);
	const searchResults = await fetch(searchEndpoint);
	res.render('main', {
		results: searchResults,
		searchPageTitle: `'${req.query.search}' in Alle Comics`,
	});
}

module.exports = showSearchResults;
