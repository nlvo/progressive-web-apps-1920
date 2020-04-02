const creators = require('../model/creators');

async function showOne (req, res) {
	const id = req.params.id;
	const creator = await creators.getOne(id);
	res.render('creators', { creator });
}

// render all the creators when the data is available
async function showAll (req, res) {
	const allCreators = await creators.getAll();
	res.render('creators', { creators: allCreators, creatorsPageTitle: 'All creators' });
}

module.exports = {
	showAll,
	showOne,
};
