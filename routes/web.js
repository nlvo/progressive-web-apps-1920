const express = require('express');

const app = express();
const characters = require('../controllers/characters');
const search = require('../controllers/search');
const comics = require('../controllers/comics');
const creators = require('../controllers/creators');
const series = require('../controllers/series');
const events = require('../controllers/events');
const browse = require('../controllers/browse');
const offline = require('../controllers/offline');

app
	.get('/', characters.showAll)
	.get('/browse', browse)
	.get('/comics', comics.showAll)
	.get('/creators', creators.showAll)
	.get('/characters', characters.showAll)
	.get('/series', series.showAll)
	.get('/events', events.showAll)

	.get('/search', search)
	.get('/offline', offline)
	.get('/comics/page', comics.showMore)

	.get('/comics/:id', comics.showOne)
	.get('/characters/:id', characters.showOne)
	.get('/series/:id', series.showOne)
	.get('/creators/:id', creators.showOne)
	.get('/events/:id', events.showOne);


module.exports = app;
