const comics = require('../model/comics');
const series = require('../model/series');
const events = require('../model/events');

// render browse page when the data of all sections are available
async function showBrowse (req, res) {
	const comicsData = await comics.getEight();
	const allSeries = await series.getAll();
	const allEvents = await events.getAll();
	res.render('browse', {
		comics: comicsData,
		series: allSeries,
		events: allEvents,
		comicsPageTitle: 'Newest comic release',
		seriesPageTitle: 'Newest series release',
		eventsPageTitle: 'Recent event update',
	});
}

module.exports = showBrowse;
