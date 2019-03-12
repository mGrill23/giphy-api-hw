var animals = ["birds", "cats", "dogs", "crabs", "emu", "snakes"];


function createNewBtns(arr) {
    
    $("#buttons").empty();

    for(var i = 0; i < arr.length; i++){
    
        var animalBtn = $("<button>").addClass(".animal-button");

        animalBtn.attr("data-animal", arr[i]);

        animalBtn.text(arr[i]);

        $("#buttons").append(animalBtn);
    }

}

// let be = document.getElementById('addbutton')
// be.addEventListener('click', console.log('did this work?'))

$("#addbutton").on("click", function(event){
    event.preventDefault();

    var newAnimal = $("#addButtonText").val().trim();

    animals.push(newAnimal);

    createNewBtns(animals);
    console.log('test click log')
});

$(".animal-button").on("click", function(){
    var queryUrl = "http://api.giphy.com/v1/gifs/random?q=" + searchQuery + "&api_key=WAXRpkX9VGr1jNv1fqExoE3TPhzI3JNM&limit=10";

    var animal = $(this).attr("data-animal");

    searchQuery = animal;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        var results = response.data;

          for (var i = 0; i < results.length; i++) {

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              
              var gifDiv = $("<div>");

              var rating = results[i].rating;

              var p = $("<p>").text("Rating: " + rating);

              var personImage = $("<img>");

              
              personImage.attr("src", results[i].images.fixed_height.url);

              
              gifDiv.append(p);
              gifDiv.append(personImage);

              
              $("#gifs-here").prepend(gifDiv);
            }
        }
    })
})