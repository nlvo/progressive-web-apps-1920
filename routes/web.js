const express = require('express');
const app = express();
const characters = require('../controllers/characters')
const character = require('../controllers/character')
const search = require('../controllers/search')
const comics = require('../controllers/comics')
const comic = require('../controllers/comic')
const browse = require('../controllers/browse')
const offline = require('../controllers/offline')

app
    .get('/', characters.showAll)
    .get('/browse', browse)
    .get('/comics', comics.showAll)
    .get('/creators', characters.showAll)
    .get('/characters', characters.showAll)
    .get('/series', characters.showAll)
    .get('/events', characters.showAll)
    .get('/search', search)
    .get('/offline', offline)
    .get('/characters/:id', character)
    .get('/comics/:id', comic)

module.exports = app