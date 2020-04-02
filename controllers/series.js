const series = require('../model/series');

// render serie detail if data is available
async function showOne (req, res) {
	const id = req.params.id;
	const serie = await series.getOne(id);
	res.render('series', {
		serie,
	});
}

// render all the series when the data is available
async function showAll (req, res) {
	const allSeries = await series.getAll();
	res.render('series', { series: allSeries, seriesPageTitle: 'All series' });
}

module.exports = {
	showAll,
	showOne,
};
