const express = require('express');
const app = express.Router();
const comics = require('../controllers/comics')
const comic = require('../controllers/comic')

app
    .get('/comics', comics)
    .get('/comics/:id', comic)

    console.log(comics)
module.exports = app