const data = require('./data');
const endpoint = require('./endpoint.js');

// Search for comic with name
async function showSearchResults (req, res) {
    const searchInput = req.query.search;
    const searchEndpoint = createSearchEndpoint(searchInput);
    const searchResults = await data.get(searchEndpoint);
    res.render('main', { results: searchResults});
}

function createSearchEndpoint (input) {
    const searchInput = input;
    const searchEndpoint = endpoint('comics', `titleStartsWith=${searchInput}`);
    // console.log(searchEndpoint);
    return searchEndpoint;
}

module.exports = {
    showSearchResults,
    createSearchEndpoint
};