console.log('Hello');

var favAnimal = {
    name: "zoe",
    animal: "cat"
};

console.log("favAnimal", favAnimal.animal);
// console.log("favAnimal", favAnimala['animal']);//other way of console.loging an object


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
console.log("insturctorPets:" ,instructorPets);

for(i=0; i<instructorPets.length; i++){
document.getElementById("petnames").innerHTML += '<h1>' + instructorPets[i].petName + '</h1>';
    // console.log(instructorPets);
}