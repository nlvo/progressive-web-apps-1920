const fetch = require('./data');
const endpoint = require('./endpoint.js');

// Get data for the overview page and render
async function showAll (req, res) {
    const comics = await getAll();
    res.render('main', { comics, comicsPageTitle: 'All comics' })
}

// Fetch data
async function getAll() {
    const comicsEndpoint = createComicsEndpoint();
    const comics = await fetch(comicsEndpoint);
    return comics;
}

function createComicsEndpoint () {
    const comicsEndpoint = endpoint('comics', 'dateDescriptor=thisMonth&orderBy=-onsaleDate&limit=20');
    return comicsEndpoint;
}

// console.log(getAllComics)
module.exports = {
    showAll, 
    getAll
};