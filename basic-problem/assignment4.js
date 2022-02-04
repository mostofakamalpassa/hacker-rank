//Problem 1 

function anaToVori(ana){

    if(typeof ana != 'number'){
        return "invalid input";
    }
    if(ana <0){
        return "only positive input allow";
    }
    let vori = ana/16;

    return vori;
}

// console.log(anaToVori(48));
// console.log(anaToVori(-80));
// console.log(anaToVori('80'));

// problem 2 

function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuntity){


    // 3 parameter price 
    let singaraPrice = 7;
    let samuchaPrice = 10;
    let jilapiPrice = 15;

    // calculation price and Quantity 
    let singaraTotal = singaraPrice * singaraQuantity;
    let samuchaTotal = samuchaPrice * samuchaQuantity;
    let jilapiTotal = jilapiPrice * jilapiQuntity;

    // total calculation 
    let grandTotal = singaraTotal + samuchaTotal + jilapiTotal;
    return grandTotal;
}

// console.log(pandaCost(1,1,1));
// console.log(pandaCost(2,3,0));
// console.log(pandaCost(2,3,4));