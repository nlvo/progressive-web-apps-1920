const search = require('../model/search');

async function showSearchResults (req, res) {
	const searchInput = req.query.search;
	const searchResults = await search(searchInput);
	res.render('search', {
		results: searchResults,
		searchPageTitle: `'${req.query.search}' in Alle Comics`,
		search: true,
	});
}

module.exports = showSearchResults;
