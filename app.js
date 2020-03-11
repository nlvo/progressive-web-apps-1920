const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const app = express();
const port = 3000
const web = require('./routes/web')

app
    .engine('hbs', exphbs({extname: '.hbs', layoutsDir: 'views'}))
    .set('view engine', 'hbs')
    .use(express.static('public'))
    .use(web)
    .listen(port, () => console.log(`listening on port${port}`))