const fetch = require('./data');
const endpoint = require('./endpoint.js');

// Get data for the detail page and render
async function showCharacter (req, res) {
    const id = req.params.id;
    const character = await getCharacter(id);
    res.render('main', { character })
}

// fetch data and find the correct character with id
async function getCharacter (id) {
    const charactersEndpoint = createCharactersEndpoint(id);
    const characters = await fetch(charactersEndpoint);
    const findData = characters.find((data) => data.id == id);
    return findData;
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

function createCharactersEndpoint (id) {
    const charactersEndpoint = endpoint(`characters/${id}`, '');
    return charactersEndpoint;
}

module.exports = showCharacter;