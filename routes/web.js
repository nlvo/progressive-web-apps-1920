const express = require('express');
const app = express.Router();
const comics = require('../controllers/comics')
const comic = require('../controllers/comic')
const browse = require('../controllers/browse')

app
    .get('/browse', browse)
    .get('/comics', comics.showAllComics)
    .get('/comics/:id', comic)

module.exports = app