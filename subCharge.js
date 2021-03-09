// Write a function addWithSubcharge that adds two amounts with subcharge. For each amount less than or equal
//  to 10, the subcharge is 1. For each amount greater than 10, the subcharge is 2.



function addWithSubcharge(amount1, amount2){

    if (amount1 <= 10){
        subcharge1 = amount1 + 1;
       
    }
    

    else {
        subcharge1 = amount1 + 2;
       
    }

    if (amount2 <= 10){
        subcharge2 = amount2 + 1;
       
    }
    else {
        subcharge2 = amount2 + 2;
        
    }

    Total = subcharge1 + subcharge2;

    console.log("sum of amount is " + Total);
    
}

addWithSubcharge(1, 1);