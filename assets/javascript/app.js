var foods = ["taco", "pizza", "cheese burger", "nachos"];

function displayGifs() {
  var foodType = $(this).attr("data-name");
  
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + foodType + "&api_key=a4CZ1y7uj55cHWUQgQFIwqiKoiRbZhib&limit=20";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response) {
    console.log(response.data);

    var results = response.data;

    for (i = 0; i < results.length; i++) {
      var foodGifs = $("<img>");

      foodGifs.addClass("gif");

      foodGifs.attr("data-still", results[i].images.fixed_height_still.url);

      foodGifs.attr("data-moving", results[i].images.fixed_height.url);

      foodGifs.attr("data-state", "still");

      foodGifs.attr("src", results[i].images.fixed_height_still.url);

      $("#foodGifs").append(foodGifs);  
    }
    
    $(".gif").on("click", function() {
      $(".gif").empty();
      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-moving"));
        $(this).attr("data-state", "animate")
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
  });
};

function generateButtons() {
  $("#gifButtonList").empty();

  for (i = 0; i < foods.length; i++) {
    var btn = $("<button>");

    btn.addClass("food btn btn-outline-secondary mb-3 ml-3");

    btn.attr("data-name", foods[i]);

    btn.text(foods[i]);

    $("#gifButtonList").append(btn);
  }
};


$("#search").on("click", function(event) {
  event.preventDefault();

  var foodType = $("#foodType").val();
  foods.push(foodType);

  $("#foodType").val("");

  generateButtons();
});  

$(".food").on("click", function() {
  var state = $(this).attr("data-state");
}); 

$(document).on("click", ".food", displayGifs);
  generateButtons();


