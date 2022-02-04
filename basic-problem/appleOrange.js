function appleOrange(s, t, a, b, apples, oranges){

    let appleCount = 0;
    let orangeCount = 0;
    
    for(let i =0; i< apples.length; i++){
        let distance = apples[i] + a;

        if(distance >= s && distance <= t){
            appleCount++;
        }

    }


    for(let j = 0; j<oranges.length; j++){
        let distance = oranges[j] + b;

        if(distance >= s && distance <= t){
            orangeCount++;
        }
    }

    console.log(appleCount)
    console.log(orangeCount)
}


console.log(appleOrange(7,11,5,15,[-2, 2,1],[-6, 5]))