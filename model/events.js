const fetch = require('./data');
const endpoint = require('./endpoint.js');

// create the all events endpoint
function createEventsEndpoint () {
	const eventsEndpoint = endpoint('events', 'orderBy=-modified&limit=8');
	return eventsEndpoint;
}

// create a new endpoint for event detail
function createEventEndpoint (id) {
	const eventsEndpoint = endpoint(`events/${id}`, '');
	return eventsEndpoint;
}

// find the correct event with id
async function getOne (id) {
	const eventsEndpoint = createEventEndpoint(id);
	const events = await fetch(eventsEndpoint);
	const findData = events.find((data) => data.id == id);
	return findData;
}

// get all the comics and return the data
async function getAll () {
	const eventsEndpoint = createEventsEndpoint();
	const events = await fetch(eventsEndpoint);
	return events;
}

module.exports = {
	getAll,
	getOne,
};
