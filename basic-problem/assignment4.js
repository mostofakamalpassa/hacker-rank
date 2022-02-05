//Problem 1 

function anaToVori(ana){

    if(typeof ana != 'number'){
        return "invalid input ?";
    }
    if(ana <0){
        return "only positive input allow ?";
    }
    let vori = ana/16;

    return vori;
}

// console.log(anaToVori(48));
// console.log(anaToVori(-80));
// console.log(anaToVori('80'));

// problem 2 

function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuntity){

    if(singaraQuantity < 0 || samuchaQuantity < 0 || jilapiQuntity < 0 ){
        return "Nagitive Value can not allow ?";
    }

    if (typeof singaraQuantity != 'number' || typeof samuchaQuantity != 'number' || typeof jilapiQuntity != 'number'){
        return "Number only allow ?";
    }


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
 //console.log(pandaCost(2,3,4));
//  console.log(pandaCost("2",3,4));
//  console.log(pandaCost(-5,3,4));


function picnicBudget(member){

    if(typeof member != 'number'){
        return "Plase give valid number";
    }
    if(member <=0){
        return "Nigative number are not allow";
    }
    let totalCollection = 0;

    if(member<= 100){
        totalCollection = member * 5000;
    }

    if(member> 100 && member <= 200){

        let lessMember = member - 100;
        totalCollection = 100 * 5000;
        totalCollection +=  lessMember * 4000;
    }

    if(member > 200 ){
        let lessMember = member - 200;
        totalCollection = 100 * 5000;
        totalCollection += 100 * 4000;
        totalCollection += lessMember * 3000;
    }

    return totalCollection;
}

 //console.log(picnicBudget(205));
// console.log(picnicBudget(100));
// console.log(picnicBudget(200));
// console.log(picnicBudget("200"));
 //console.log(picnicBudget(-5));


// problem 4 

function oddFriend(firndArray){

 //  let oddLength = 0;

    // cheack is array 
    if( Array.isArray(firndArray) != true){
        return " only array allow ? ";
    }

    // array evenry element iterations
    for(let i = 0; i<firndArray.length; i++){
    // cheack is every array element value string or not
        if(typeof firndArray[i] != 'string'){
           return "only string value allow ?";
        }
    }

    // array evenry element iterations 
    for(let i = 0; i<firndArray.length; i++){
        // check first friends name odd number 
        if(firndArray[i].length % 2 != 0){
            return firndArray[i];
        }
    }
}

//console.log(oddFriend(['kamala', 'jamala','mostofa', 'abc', 'cdefgh']));
// console.log(oddFriend([3334,'kamala', 'jamala','mostofa', 'abc', 'cdefgh']));
// console.log(oddFriend(555));
// console.log(oddFriend({}));
// console.log(oddFriend("kamal passa"));

    
