// Requiring our models
var db = require("../models");
const axios = require("axios");
var passport = require("../config/passport");
var array = []

module.exports = function(app) {

  // Route for logging user out
  app.get("/api/artist/:name", function(req, res) {
    console.log(req.params.name)
    axios({
        "method":"GET",
        "url":"https://deezerdevs-deezer.p.rapidapi.com/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key":"778af56556msh60df0212f929a25p1bd6fajsn95b39208364f",
        "useQueryString":true
        },"params":{
        "q": req.params.name
        }
        })
        .then((response)=>{
          console.log(response.data)
          res.json(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
  });

  app.get("/api/song/:songname", function(req, res) {
    console.log(req.params.songname)
    axios({
        "method":"GET",
        "url":"https://deezerdevs-deezer.p.rapidapi.com/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key":"778af56556msh60df0212f929a25p1bd6fajsn95b39208364f",
        "useQueryString":true
        },"params":{
        "q": req.params.songname
        }
        })
        .then((response)=>{
          console.log(response.data)
          res.json(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
  });

  app.get("/api/album/:albumname", function(req, res) {
    console.log(req.params.albumname)
    axios({
        "method":"GET",
        "url":"https://deezerdevs-deezer.p.rapidapi.com/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key":"778af56556msh60df0212f929a25p1bd6fajsn95b39208364f",
        "useQueryString":true
        },"params":{
        "q": req.params.albumname
        }
        })
        .then((response)=>{
          console.log(response.data)
          res.json(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
  });


}

