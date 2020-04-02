const fetch = require('./data');
const endpoint = require('./endpoint.js');

// create the all series endpoint
function createSeriesEndpoint () {
	const seriesEndpoint = endpoint('series', 'orderBy=-modified&limit=8');
	return seriesEndpoint;
}

// create a new endpoint for serie detail
function createSerieEndpoint (id) {
	const seriesEndpoint = endpoint(`series/${id}`, '');
	return seriesEndpoint;
}

// find the correct serie with id
async function getOne (id) {
	const seriesEndpoint = createSerieEndpoint(id);
	const series = await fetch(seriesEndpoint);
	const findData = series.find((data) => data.id == id);
	return findData;
}

// get all the comics and return the data
async function getAll () {
	const seriesEndpoint = createSeriesEndpoint();
	const series = await fetch(seriesEndpoint);
	return series;
}

module.exports = {
	getAll,
	getOne,
};
