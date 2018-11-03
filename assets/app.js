var queryUrl = "http://api.giphy.com/v1/gifs/random?q=" + searchQuery + "&api_key=WAXRpkX9VGr1jNv1fqExoE3TPhzI3JNM&limit=10";
var searchQuery = "placeholder";
var animals = ["birds", "cats", "dogs", "crabs", "emu", "snakes"];


function createNewBtns() {

    $("#buttons").clear();

    for(var i = 0; i < animals.length; i++){
    
    var animalBtn = $("<button").addClass(".animal-button");

    animalBtn.attr("data-animal", animals[i]);

    animalBtn.text(animals[i]);

    $("#buttons").append(animalBtn);

    }

}




