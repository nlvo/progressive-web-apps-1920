const events = require('../model/events');

// render event detail if data is available
async function showOne (req, res) {
	const id = req.params.id;
	const event = await events.getOne(id);
	res.render('events', {
		event,
	});
}

// render all the events when the data is available
async function showAll (req, res) {
	const allEvents = await events.getAll();
	res.render('events', { events: allEvents, eventsPageTitle: 'All events' });
}

module.exports = {
	showAll,
	showOne,
};
