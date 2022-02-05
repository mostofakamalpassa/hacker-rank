let sum = 0;
function recursionSum(number){

    if(number <= 0){
        return;
    }

    sum += number;
     recursionSum(number - 1);

    return sum;

}

console.log(recursionSum(10));