# Progressive Web App with Marvel API
![mockup from Progressive Web App with the Marvel API](https://user-images.githubusercontent.com/8554238/76617951-aa173900-6527-11ea-8bab-ee79b67db3ce.png)
[live demo link](https://marvel-dashboard.herokuapp.com/)

A good [example](https://marvel-dashboard.herokuapp.com/comics/78072) of a comic detailpage, with all the data. Because some of them are missing some data, either there are no creators or characters data available.

## Installation
```
# Clone or download the repository
$ git clone https://nlvo.github.io/web-app-from-scratch-1920/

# Install dependencies
npm install

# Dev
npm run start:dev

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
Things/features I would like to add. For more info see [project marvel](https://github.com/nlvo/progressive-web-apps-1920/projects/1)
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
    - [x] serverside
    - [x] clientside
  - [x] detail
- [x] characters 
  - [x] overview
  - [x] detail
- [ ] filter

## Shoutout
Declan example for build with script.

## Sources
[Ionicicons](http://ionicons.com/)
[Captain america shield](https://commons.wikimedia.org/wiki/File:Captain_America_Shield.svg)
[Avengers logo](https://seeklogo.com/vector-logo/199629/the-avengers)

## Feedback
Things for the latest feedback are located in my [wiki](https://github.com/nlvo/progressive-web-apps-1920/wiki/Week-2---Progressive-Web-App-%F0%9F%9A%80%7C-Feedback).

## Conclusion
Things I've learned and made are located in my [wiki](https://github.com/nlvo/progressive-web-apps-1920/wiki/Performance)

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
