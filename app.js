const express = require('express');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path');
const app = express();
const port = process.env.PORT || 3000
const web = require('./routes/web')

app
    .engine('hbs', exphbs({extname: '.hbs', layoutsDir: 'views'}))
    .set('view engine', 'hbs')
    .use(express.static('public'))
    .use(express.json())
    // .use(bodyParser.urlencoded({ extended:true }))
    // .use(bodyParser.urlencoded({ extended:true }))
    // .use(methodOverride('_method'))
    .use(web)
    .listen(port, () => console.log(`listening on port ${port}`))