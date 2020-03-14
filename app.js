require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = process.env.PORT
const web = require('./routes/web')

app
    .engine('hbs', exphbs({extname: '.hbs', layoutsDir: 'views'}))
    .set('view engine', 'hbs')
    .use(express.static('public'))
    .use(express.json())
    .use(web)
    .listen(port, () => console.log(`listening on port ${port}`))