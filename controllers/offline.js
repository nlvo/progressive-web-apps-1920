function offline (req, res) {
	res.render('main', { message: 'connection lost..' });
}

module.exports = offline;
