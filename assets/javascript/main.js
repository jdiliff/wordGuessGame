

//list of word choice for the computer

var wordChoices = [
    "Titanic", 
    // "Planet of the Apes", 
    // "Star Wars", 
    // "Inception", 
    // "The Lord of the Rings", 
    // "The Godfather", 
    "Braveheart", 
    "Gladiator", 
    "Interstellar" 
]


//insturctions for the computer to pick a random word for the array above

var word = words[Math.floor(Math.random() * wordChoices.length)];





//create empty spaces for the letters in whichever word the computer chose

//for loop
var answerArray = [];
    for (var i = 0; i < word.length; i++) {

//blank spaces for each letter
answerArray[i] = "_";
}
var remainingLetters = word.length;



