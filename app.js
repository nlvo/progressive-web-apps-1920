const express = require('express');
const app = express();
const port = 3000
const web = require('./routes/web')

app
    .set('view engine', 'ejs')
    .use(express.static('public'))
    .use(web)
    .listen(port, () => console.log(`listening on port${port}`))