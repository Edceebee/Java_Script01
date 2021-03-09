// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or
// if their sum is 50.

function check(firstNumber, secondNumber){

    sum = firstNumber + secondNumber;

    if (firstNumber == 50){
        console.log("true, first number is 50")
        }
        else{
            console.log("false, first number is not 50")
        }

    if (secondNumber == 50){
        console.log("true, second number is 50")    
    }
    else{
        console.log("false, second number is not 50")
    }

    if (firstNumber == secondNumber){
        console.log("true, first number is equals second number")        
    }
    else{
        console.log("false, first number is not equals second number")
    }

    if(sum == 50){
        console.log("true, sum of numbers is 50")        
    }
    else{
        console.log("false, sum of numbers is not 50")
    }

}

check(50, 50);