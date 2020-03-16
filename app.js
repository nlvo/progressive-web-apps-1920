require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const web = require('./routes/web');

const app = express();
const port = process.env.PORT;

app
	.engine('hbs', exphbs({
		extname: '.hbs',
		layoutsDir: 'views',
	}))
	.set('view engine', 'hbs')
	.use(express.static('public'))
	.use(express.json())
	.use(web)
	.listen(port);
