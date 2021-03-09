// 2- Write a JavaScript program to check from two given integers, whether one is positive and another one is
//  negative.

function posNeg( number1, number2){
    if (number1 % 2 == 0){
        console.log(number1 + " " + "is a positive number");
    }

    else{
        console.log(number2 + " " + "is a negative number");
    }

    if (number2 % 2 == 0){
        console.log(number1 + " " + "is a positive number");
    }

    else{
        console.log(number2 + " " + "is a negative number");
    }
}

posNeg(2,4)