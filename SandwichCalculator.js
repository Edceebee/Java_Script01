// A Sandwich Calculator
// 1. Write a function called sandwich calculator. This should accept one value: slicesOfBread
// 2. The function should return the total number of possible sandwiches based on the amount of slices available, so if there are 10 slices, 
//      it should return 5. Test your function with an alert box.
// 3. Extend your function so it accepts two values, slicesOfBread and slicesOfCheese.
// 4. It takes two slices of bread and one of cheese to make a sandwich. The function should return the total number of possible sandwiches,
//      so if there are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need an if statement to make this work.


function sandwich(sliceOfBread){
let remainingBread = Math.floor((sliceOfBread / 2));

//  console.log("the remaining bread is : " + remainingBread);
 
}

// sandwich(10);

function sandwichAndCheese(sandwich, sliceOfCheese){
    if (sandwich(sliceOfBread) >= sliceOfCheese){
        console.log(sliceOfCheese);
    }

    else (sandwich(sliceOfBread)< sliceOfCheese){
    console.log(sandwich(sliceOfBread));
}

}

sandwichAndCheese(10,20);