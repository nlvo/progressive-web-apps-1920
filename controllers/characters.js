const data = require('./data');
const endpoint = require('./endpoint.js');

// Get data for the overview page and render
async function showAllCharacters (req, res) {
    const comics = await getAllCharacters();
    res.render('characters.ejs', { comics })
}

// Fetch data
async function getAllCharacters () {
    const charactersEndpoint = createCharactersEndpoint();
    const characters = await data.get(charactersEndpoint);
    return characters;
}

function createCharactersEndpoint () {
    const charactersEndpoint = endpoint('characters', 'orderBy=-modified&limit=4');
    return charactersEndpoint;
}

module.exports = {
    getAllCharacters,
    showAllCharacters
}