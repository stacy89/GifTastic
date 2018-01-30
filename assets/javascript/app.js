var foods = ["taco", "pizza", "cheese burger", "nachos"];

function displayGifs() {
  var foodType = $(this).attr("data-name");
  // console.log(foodType);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + foodType + "&api_key=a4CZ1y7uj55cHWUQgQFIwqiKoiRbZhib&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response) {
    console.log(response);
  });
};

// function generateButtons() {
//   $("foodGifs").empty();

//   for (i = 0; i < foods.length; i++) {
//     var btn = $("<button>");

//     btn.addClass("food");

//     btn.attr("data-name", foods[i]);

//     btn.text(foods[i]);

//     $("#gifButtonList").append(btn);
//   }
// };


// $("#search").on("click", function(event) {
//   event.preventDefault();

//   var foodType = $("#foodType").val();
//   foods.push(foodType);

//   generateButtons();
// });  

// $(document).on("click", ".food", function() {

// });


