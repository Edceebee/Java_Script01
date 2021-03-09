// Write a function toArray that takes 2 values and returns these values in an array.

function toArray(value1, value2){
    var newArray = ["value1", "value2"];
    console.log(Array.from(arguments));
}

toArray(3,4);