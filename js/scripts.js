$(document).ready(function() {
  $("#things").submit(function(event) {
    event.preventDefault()
    var favoriteThings = ["favThings", "favThings1", "favThings2", "favThings3"]

    favoriteThings.forEach(function(favoriteThing) {
      var userInput = $("input#" + favoriteThing).val();
      $("ul.stuff").prepend("<li>" + userInput + "</li>");
      console.log(userInput)


    });
    var elements = ["h1","h2"]
    elements.forEach(function(element){
      $(element.toString()).click(function() {
        if (element === "h1") {
          alert("This is a header.");
        } else if (element === "h2") {
          alert("this is a h2 header")
        }
    });
  });
  });
});
