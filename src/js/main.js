const moreComics = document.querySelector('.more');
const section = document.querySelector('.comics');

function next () {

}

async function showComics () {
	const base = location.pathname;
	const data = await fetch(`${base}/page`);
	const n = await data.text();
	section.insertAdjacentHTML('beforeend', n);
}

moreComics.addEventListener('click', showComics);
