const fetch = require('./data');
const endpoint = require('./endpoint.js');

// Get data for the detail page and render
async function showComic (req, res) {
    const id = req.params.id;
    const comic = await getComic(id);
    const comicCharacters = await getComicCharacters(id);
    res.render('main', { comic, comicCharacters})
}

// fetch data and find the correct comic with id
async function getComic (id) {
    const comicsEndpoint = createComicsEndpoint(id);
    const comics = await fetch(comicsEndpoint);
    const findData = comics.find((data) => data.id == id);
    return findData;
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

function createComicsEndpoint (id) {
    const comicsEndpoint = endpoint(`comics/${id}`, '');
    return comicsEndpoint;
}

// fetch data and find the correct comic with id
async function getComicCharacters (id) {
    const charactersEndpoint = createCharactersEndpoint(id);
    const comicsCharacters = await fetch(charactersEndpoint);
    return comicsCharacters;
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

function createCharactersEndpoint (id) {
    const charactersEndpoint = endpoint(`comics/${id}/characters`, '');
    return charactersEndpoint;
}

module.exports = showComic;