const comics = require('../model/comics');

// render page when data is available
async function showOne (req, res) {
	const id = req.params.id;
	const comic = await comics.getOne(id);
	const comicCharacters = await comics.getCharacters(id);
	res.render('main', { comic, comicCharacters });
}

// render comics when data is available
async function showAll (req, res) {
	const allComics = await comics.getEight();
	res.render('main', {
		comics: allComics,
		comicsPageTitle: 'All comics',
	});
}

module.exports = {
	showAll,
	showOne,
};
