// Write a JavaScript program to compute the sum and product of an array of integers.

function manipulateArray(array){
    sum = 0;
    product = 1;

   
    for (counter = 1; counter < array.length; counter++){
    sum += array[counter];
    product *= array[counter];
    }
    console.log("The sum of array is: " + sum);
    console.log("The product of array is: " + product);


    
}

let array = [1,2,3,4,5];
manipulateArray(array)
