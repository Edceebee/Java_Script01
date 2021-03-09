// Write a JavaScript program to find the area of a scalene triangle where lengths of the three of its sides
//  are 5, 6, 7.
const prompt = require('prompt-sync')();

function area (){


var length1 = prompt("Enter first length :");
var length2 = prompt("Enter second length :");
var length3 = prompt("Enter third length :");

    p = 0.5 * (length1 + length2 + length3);
    area2 = (p * (p - length1)) * (p * (p - length2)) * (p * (p - length3));
    area1 = Math.sqrt(area2);

    console.log("the area is " + area1);
}

area();