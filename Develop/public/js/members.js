
// const axios = require("axios");

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});

// axios({
//     "method":"GET",
//     "url":"https://deezerdevs-deezer.p.rapidapi.com/search",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
//     "x-rapidapi-key":"778af56556msh60df0212f929a25p1bd6fajsn95b39208364f",
//     "useQueryString":true
//     },"params":{
//     "q":"artistName"
//     }
//     })
//     .then((response)=>{
//       console.log(response)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })

  