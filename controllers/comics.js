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
	const pageNumber = 0;
	const allComics = await comics.getMore(pageNumber);
	res.render('comics', {
		comics: allComics,
		comicsPageTitle: 'All comics',
		pageNumber,
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

// render comics when data is available
async function showNext (req, res) {
	const id = req.params.id;
	const pageNumber = comics.getPageNumber(id);
	const allComics = await comics.getNextPage(pageNumber);
	res.render('comics', {
		comicsPageTitle: 'All comics',
		comics: allComics,
		pageNumber,
	});
}

module.exports = {
	showAll,
	showOne,
	showMore,
	showNext,
};
