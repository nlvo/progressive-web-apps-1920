const characters = require('../model/characters');

// render character detail if data is available
async function showOne (req, res) {
	const id = req.params.id;
	const character = await characters.getOne(id);
	res.render('main', {
		character,
	});
}

// render all the characters when the data is available
async function showAll (req, res) {
	const allCharacters = await characters.getAll();
	res.render('main', { characters: allCharacters, charactersPageTitle: 'All characters' });
}

module.exports = {
	showAll,
	showOne,
};
