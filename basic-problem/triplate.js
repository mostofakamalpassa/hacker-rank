function compareTriplets(a, b) {
    // Write your code here

    let countA = 0;

    let  countB = 0;

    for(let i =0; i<a.length; i++){

        // for(let j = 0; j< b.length; j++){
        //     if(a[i]> b[j]){
        //         countA++;
        //     }

        //     if(a[i]< b[j]){
        //         countB++;
        //     }
        // }

        if(a[i]> b[i]){
            countA++;
        }
        if(a[i] < b[i]){
            countB++;
        }
    }


    return[countA, countB];

}

console.log(compareTriplets([17, 28 ,30], [99, 16, 8]));