const data = require('./data');
const endpoint = require('./endpoint.js');

// Get data for the overview page and render
async function showAllComics (req, res) {
    const comics = await getAllComics();
    console.log(comics)
    res.render('main', { comics, comicsPageTitle: 'All comics' })
}

// Fetch data
async function getAllComics () {
    const comicsEndpoint = createComicsEndpoint();
    const comics = await data.get(comicsEndpoint);
    return comics;
}

function createComicsEndpoint () {
    const comicsEndpoint = endpoint('comics', 'dateDescriptor=thisMonth&orderBy=-onsaleDate&limit=20');
    return comicsEndpoint;
}

// console.log(getAllComics)
module.exports = {
    showAllComics, 
    getAllComics
};