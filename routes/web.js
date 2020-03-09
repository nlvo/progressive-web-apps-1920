const express = require('express');
const app = express.Router();
const comics = require('../controllers/home')
const comic = require('../controllers/comic')

app
    .get('/', comics)
    .get('/:id', comic)

    console.log(comics)
module.exports = app