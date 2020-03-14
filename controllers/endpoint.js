require('dotenv').config();

function create(category, query) {
    // create endpoint url
    const endpointMarvel = 'https://gateway.marvel.com/v1/public/';
    const apiKey = process.env.API_KEY;
    const hash = process.env.HASH;
    const timestamp = process.env.TIMESTAMP;
    const endpoint = `${endpointMarvel}${category}?${query}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;
    return endpoint;
}

module.exports = create;