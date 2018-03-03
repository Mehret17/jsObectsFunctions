console.log ("function");

//function expression



var num = 3;

function numPrinter(monkeyButt) {
    console.log("my number:", monkeyButt);
}

numPrinter(num);
numPrinter(4);
numPrinter(6);
numPrinter("turtle");

function cat(){
    return "love them";
}

var message = cat();
console.log ("message:", message);



var instructorPets = [
    {
        insturctorName: "Zoe",
        petName: "Biff",
        animalType: "cat",
        isFavorite: true
    },

    {
        insturctorName: "Zoe",
        petName: "Whiskey",
        animalType: "evil cat",
        isFavorite: false
    },

    {
        insturctorName: "Lauren",
        petName: "Frankie",
        animalType: "sweet dog",
        isFavorite: true
    },
    {
        insturctorName: "Callan",
        petName: "Seymour",
        animalType: "one eyed dog",
        isFavorite: true
    },

    {
        insturctorName: "Callan",
        petName: "Wiley",
        animalType: "destructive dog",
        isFavorite: false
    },

];


// {/* <div class="pet isNotFavorite">
//         <h1>Biff</h1>
//         <h3>Owner: Zoe</h3>
//         <h3>Type: Bad Cat</h3>
//      </div>
//      <div class="pet isFavorite">
//             <h1>Whiskey</h1>
//             <h3>Owner: Zoe</h3>
//             <h3>Type: cat</h3>
//          </div> */}

function domStringMaker(animalArray){
    //take pet names and create dom string
    //call printToDom funstion
    for(var i=0; i<animalArray.length; i++){
        var animalString ="";
        if(animalArray[i].isFavorite){
            animalString += '<div class ="pet isFavorite">';
        } else {
            animalString += '<div class ="pet isNotFavorite">';
        }
        animalString += '<div class= "pet">';
        animalString += '<h1>' + animalArray[i].petName + '</h1>';
        animalString += '<h3> Owner: ' + animalArray[i].petName + '</h3>';
        animalString += '<h1> Type: ' + animalArray[i].petName + '</h3>';
        animalString += '</div>';
    //   var animalString = "<h5>" + animalArray[i].petName + "</h5>";

      // console.log("animalString", animalString);
      printToDom(animalString, "petnames");
    }
  }
  
  function printToDom(stringToPrint, divId){
    //take string and innerHTML to the div
    var myDiv = document.getElementById(divId);
    // console.log("myDiv", myDiv);
    myDiv.innerHTML += stringToPrint;
  }
  
   domStringMaker(instructorPets); //calls is out displayed in the HTMl

 

