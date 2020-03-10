const comics = require('./comics')
const characters = require('./characters')

async function showBrowse (req, res) {
    const comicsData = await comics.getAllComics();
    const charactersData = await characters.getAllCharacters();
    res.render('index.ejs', { comics: comicsData, characters: charactersData })
}

module.exports = showBrowse;