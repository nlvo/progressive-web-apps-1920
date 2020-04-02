function offline (req, res) {
	res.render('offline', { message: 'connection lost..' });
}

module.exports = offline;
