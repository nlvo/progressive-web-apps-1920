const fetch = require('./data');
const endpoint = require('./endpoint.js');

// create the all creators endpoint
function createCreatorsEndpoint () {
	const creatorsEndpoint = endpoint('creators', 'orderBy=-modified&limit=8');
	return creatorsEndpoint;
}

// create a new endpoint for creator detail
function createCreatorEndpoint (id) {
	const creatorsEndpoint = endpoint(`creators/${id}`, '');
	return creatorsEndpoint;
}

// find the correct creator with id
async function getOne (id) {
	const creatorsEndpoint = createCreatorEndpoint(id);
	const creators = await fetch(creatorsEndpoint);
	const findData = creators.find((data) => data.id == id);
	return findData;
}

// get all the comics and return the data
async function getAll () {
	const creatorsEndpoint = createCreatorsEndpoint();
	const creators = await fetch(creatorsEndpoint);
	return creators;
}

module.exports = {
	getAll,
	getOne,
};
