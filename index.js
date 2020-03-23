require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const web = require('./routes/web');

const app = express();
const port = process.env.PORT;

app
	.engine('hbs', exphbs({
		extname: 'hbs',
		layoutsDir: 'views',
		partialsDir: 'views',
	}))
	.set('view engine', 'hbs')
	.set('views', path.join(__dirname, 'views/'))
	.use(express.static('public'))
	.use(express.json())
	.use(web)
	.listen(port);
