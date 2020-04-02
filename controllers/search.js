const search = require('../model/search');

async function showSearchResults (req, res) {
	const searchInput = req.query.search;
	const searchResults = search.getAll(searchInput);
	res.render('main', {
		results: searchResults,
		searchPageTitle: `'${req.query.search}' in Alle Comics`,
		search: true,
	});
}

module.exports = showSearchResults;
