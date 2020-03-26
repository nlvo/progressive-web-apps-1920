const moreComics = document.querySelector('.more');
const section = document.querySelector('.comics');
let pages = 0;

function next () {
	const maxComics = 80;
	const comics = 8;
	const totalComics = pages * comics;
	if (totalComics < maxComics) {
		pages += 1;
	}
	return pages;
}

async function showComics () {
	const base = location.pathname;
	const currentPage = next();
	const data = await fetch(`${base}/page?id=${currentPage}`);
	const n = await data.text();
	section.insertAdjacentHTML('beforeend', n);
}

moreComics.addEventListener('click', showComics);
