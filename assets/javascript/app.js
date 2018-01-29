var foods = ["pizza", "sandwhich", "wings", "tacos"];

function displayInputInfo() {
  var userInput = $(this).attr("data-name");

  var URL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=a4CZ1y7uj55cHWUQgQFIwqiKoiRbZhib"

  $.ajax.({
    url: URL,
    method: "GET"
  })
  .done(function(response) {
    console.log(response);
  });

  function displayButton() {
    $("buttonInfo").empty();

    for (i = 0; i < foods.length; i++) {
      var btn = $("<button>");

      btn.addClass("gif");
      btn.attr("data-name", foods[i]);
      btn.text(foods[i]);
      $(".foodGifs").append(btn);
    }

    $().on("click", function(event) {
      event.preventDefault();

      var userInput = $().val().trim();
      userInput.push(foods);
      
    });
  };