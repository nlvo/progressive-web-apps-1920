# Progressive Web App with Marvel API
![mockup from Progressive Web App with the Marvel API](https://user-images.githubusercontent.com/8554238/76617951-aa173900-6527-11ea-8bab-ee79b67db3ce.png)
[live demo link](https://marvel-dashboard.herokuapp.com/)

A good [example](https://marvel-dashboard.herokuapp.com/comics/78072) of a comic detailpage, with all the data. Because some of them are missing some data, either there are no creators or characters data available.

## !Important (Dutch)
### Trots
Ik heb het gevoel dat ik vorige week meer progressie had gemaakt, mede door dat ik daar veel meer functionaliteiten heb toegevoegd. Wel ben ik blij met wat er nu staat!

### Geleerd
#### Service Workers
Deze week heb ik geleerd over Service Workers, het blijft een lastig onderwerp. Wel ik heb gezien hoe krachtig het is. Zeker toen ik voor Browser Technologies perongeluk dezelfde port had gebruikt voor het project (localhost:3000). En daar was de Marvel app! Daarnaast wil ik hier wat meer verdiepen als ik er tijd voor heb, om zo het concept hiervan nog beter te begrijpen.

### Feedback
Ik hoor graag wat er nog beter kan of enige tips! Dit zou ook de structuur, benaming of iets dergelijks kunnen zijn of extra/leuke features.

#### PWA
Het was heel leuk om je eigen "applicatie" te kunnen instaleren en hoe gemakkelijk dit eigelijk was.

#### Build tools (Declans manier)
In plaats van gebruik te maken van een task runner, heb ik met behulp van package.json script verschillende packages gebruikt om iets te builden.

## Description
The concept of this application is a Marvel based application where you can get an overview with the latest comics release, series and/or events.

## Installation
```
# Clone or download the repository
$ git clone https://nlvo.github.io/web-app-from-scratch-1920/

# Install dependencies
npm install

# Dev
npm run dev

# Production
npm start

# Open localhost:3000
```
## API
The Marvel Comics API’s base endpoint is `http(s)://gateway.marvel.com/`.

To use the Marvel API you'll need a few things:

* API key
* ts (a timestamp)
* hash

### Parameters
* `/v1/public/characters`
* `/v1/public/comics`
* `/v1/public/series`

### Results structure
```
{
  "code": 200,
  "status": "Ok",
  "etag": "f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 30920,
    "count": 20,
    "results": [{array of objects}}]
  }
}
```
More about the [api results](https://developer.marvel.com/documentation/apiresults) in the Marvel API documentation.

### Rate Limit
3000 calls per day

For more information you can refer to the [Marvel API documentation](https://developer.marvel.com/documentation/).

## Aplication
### Actor Diagram
![Actor Diagram](https://user-images.githubusercontent.com/8554238/75497364-50a9f880-59c4-11ea-898d-418ca7a1e3d4.png)

### Interaction Diagram
![Interaction Diagram](https://user-images.githubusercontent.com/8554238/75497870-dc705480-59c5-11ea-8bd3-099a5912ae45.png)

## ToDo
Things/features I would like to add
- [x] browse
    - [x] comics
    - [x] characters
    - [ ] events
    - [ ] series
- [x] search
    - [x] overview 
    - [ ] clientside
  - [x] comics 
    - [x] overview
    - [x] detail
  - [x] characters 
    - [x] overview
    - [x] detail
- [ ] filter

## Shoutout
Declan example for build with script.

### License
Copyright © 2020, [Lien Vo](https://github.com/nlvo) . Released under the [MIT license](https://github.com/nlvo/web-app-from-scratch-1920/blob/master/LICENSE). Data provided by Marvel. © 2020 Marvel.

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
