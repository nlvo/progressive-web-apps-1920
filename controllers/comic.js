const fetch = require('node-fetch');

function clean (oldData) {
    // console.log(oldData);

    let newData = oldData.data.results;
    
    return newData = newData.map((data) => {
        // https://stackoverflow.com/questions/54513877/javascript-merge-multiple-object-values-into-array
        const creators = data.creators ? data.creators.items.map(creators => creators) : '';
        const thumbnail = data.thumbnail.path.includes('image_not_available') ? 'img/not-found' : data.thumbnail.path;
        return {
            id : data.id,
            title: data.name || data.title,
            thumbnail: thumbnail + '.' + data.thumbnail.extension,
            comicsAvailabe: data.comics ? data.comics.available : data.description,
            creators: creators,
            // characters: data.characters,
            stories: data.stories
        }
    });

    // https://stackoverflow.com/questions/48435515/how-to-flatten-nested-array-of-object-using-es6
    // https://stackoverflow.com/questions/54733622/i-need-remove-unnecessary-json-objects-form-my-result-json-file-using-javascript
}

function createComicsEndpoint () {
    const comicsEndpoint = createEndpoint('comics', 'dateDescriptor=thisMonth&orderBy=onsaleDate&limit=10');
    return comicsEndpoint;
}

function createEndpoint(category, query) {
    // create endpoint url
    const endpointMarvel = 'https://gateway.marvel.com/v1/public/';
    const apiKey = '22b5f2403c91db4fba23cad90a8b2ab7';
    const hash = 'e6bb9dbff35775d2d8aed171d44888d4';
    const timestamp = '1581025873';
    const endpoint = `${endpointMarvel}${category}?${query}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;
    return endpoint;
}

// fetched data and clean it
async function fetchData (url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    const cleanData = clean(jsonData);
    return cleanData;
}

// Get data for the detail page and render
async function showComic (req, res) {
    const comic = await getComic(req.params.id);
    res.render('detail.ejs', { comic })
}

// fetch data and find the correct comic with id
async function getComic (id) {
    const comicsEndpoint = createComicsEndpoint();
    const comics = await fetchData(comicsEndpoint);
    const findData = comics.find((data) => data.id == id);
    return findData;
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

module.exports = showComic;