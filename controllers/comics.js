const comics = require('../model/comics');

// render page when data is available
async function showOne (req, res) {
	const id = req.params.id;
	const comic = await comics.getOne(id);
	const comicCharacters = await comics.getCharacters(id);
	res.render('comics', { comic, comicCharacters });
}

// render comics when data is available
async function showAll (req, res) {
	const allComics = await comics.getEight();
	res.render('comics', {
		comics: allComics,
		comicsPageTitle: 'All comics',
	});
}

// render comics when data is available
async function showMore (req, res) {
	const id = req.query.id;
	const allComics = await comics.getMore(id);
	res.render('more', {
		layout: false,
		comics: allComics,
	});
}

module.exports = {
	showAll,
	showOne,
	showMore,
};
