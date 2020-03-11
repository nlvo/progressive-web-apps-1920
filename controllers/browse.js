const comics = require('./comics')
const characters = require('./characters')

async function showBrowse (req, res) {
    const comicsData = await comics.getAllComics();
    const charactersData = await characters.getAllCharacters();
    res.render('main', { comics: comicsData, characters: charactersData, comicsPageTitle: 'Newest release', charactersPageTitle: 'Recent update' })
}

module.exports = showBrowse;