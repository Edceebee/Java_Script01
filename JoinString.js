// Write a simple JavaScript program to join all elements of the following array into a string. Sample array : 
// myColor = ["Red", "Green", "White", "Black"]; *** Expected Output: "Red,Green,White,Black" "Red,Green,
// White,Black" "Red+Green+White+Black"

function joinString(){

    const prompt = require('prompt-sync')();
    var word1 = prompt("Enter a word :");
    var word2 = prompt("Enter a word :");
    var word3 = prompt("Enter a word :");

    console.log(word1 + word2 + " " + word3);

}

joinString();