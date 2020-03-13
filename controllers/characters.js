const fetch = require('./data');
const endpoint = require('./endpoint.js');

// Get data for the overview page and render
async function showAll (req, res) {
    const characters = await getAll();
    console.log(characters);
    
    res.render('main', { characters, charactersPageTitle: 'All characters' })
}

// Fetch data
async function getAll () {
    const charactersEndpoint = createCharactersEndpoint();
    const characters = await fetch(charactersEndpoint);
    return characters;
}

function createCharactersEndpoint () {
    const charactersEndpoint = endpoint('characters', 'orderBy=-modified&limit=8');
    return charactersEndpoint;
}

module.exports = {
    getAll,
    showAll
}