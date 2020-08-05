$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });


  $("#submit").on("click", function() {
    $.get("/api/artist/:"+$("#artist").val()).done(function (response) {
      console.log(name);
      console.log(response)
      for (i=0; i<response.data.length; i++) {
        let newDiv = $("<div>")
        newDiv.text(response.data[i].title)
        $('body').append(newDiv)
      }
    });
    console.log($("#artist").val())
  })


});

