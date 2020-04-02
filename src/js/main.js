const moreComics = document.querySelector('.more');
const section = document.querySelector('.comics footer');
let pages = 0;

function nextPage () {
	const maxComics = 80;
	const comics = 8;
	const totalComics = pages * comics;
	if (totalComics < maxComics) {
		pages += 1;
	}
	return pages;
}

async function showComics (event) {
	event.preventDefault();
	const baseUrl = location;
	const currentPage = nextPage();
	const response = await fetch(`${baseUrl}/page?id=${currentPage}`);
	const comicsText = await response.text();
	section.insertAdjacentHTML('beforebegin', comicsText);
}

if (moreComics) {
	moreComics.addEventListener('click', showComics);
}
