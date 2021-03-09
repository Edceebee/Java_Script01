// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then 
// returns triple their sum.
const prompt = require('prompt-sync')();

function sum(num1, num2){
   

sum = num1 + num2;

if (num1 == num2){
    total  = sum * sum * sum;
    console.log ("total is: " + total);
}
else{
    total = sum;
    console.log ("total is: " + total); 
}

}

sum( 3, 2);