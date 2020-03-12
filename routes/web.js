const express = require('express');
const app = express.Router();
const characters = require('../controllers/characters')
const search = require('../controllers/search')
const comics = require('../controllers/comics')
const comic = require('../controllers/comic')
const browse = require('../controllers/browse')

app
    // .get('/', characters.showAllCharacters)
    .get('/browse', browse)
    .get('/comics', comics.showAllComics)
    .get('/creators', characters.showAllCharacters)
    .get('/characters', characters.showAllCharacters)
    .get('/series', characters.showAllCharacters)
    .get('/events', characters.showAllCharacters)
    .get('/search', search.showSearchResults)
    .get('/comics/:id', comic)

module.exports = app