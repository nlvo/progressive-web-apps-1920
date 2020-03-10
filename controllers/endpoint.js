function create(category, query) {
    // create endpoint url
    const endpointMarvel = 'https://gateway.marvel.com/v1/public/';
    const apiKey = '22b5f2403c91db4fba23cad90a8b2ab7';
    const hash = 'e6bb9dbff35775d2d8aed171d44888d4';
    const timestamp = '1581025873';
    const endpoint = `${endpointMarvel}${category}?${query}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;
    return endpoint;
}

module.exports = create;