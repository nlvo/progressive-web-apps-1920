const comics = require('./comics');
const characters = require('./characters');

// render browse page when the data of all sections are available
async function showBrowse (req, res) {
	const comicsData = await comics.getAll();
	const charactersData = await characters.getAll();
	res.render('main', {
		comics: comicsData,
		characters: charactersData,
		comicsPageTitle: 'Newest release',
		charactersPageTitle: 'Recent update',
	});
}

module.exports = showBrowse;
