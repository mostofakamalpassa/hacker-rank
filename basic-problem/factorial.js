let fact = 1;

function factorial(i){

    if(i <= 1){
        return 1;
    }

    fact *= i;
    factorial(i - 1);

    return fact;

}

console.log(factorial(5))