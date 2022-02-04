
function grade(grades){

    // if(grades >= 38){
    //     if(grades % 5 >= 3){
    //         grades += 5 - (grades % 5);
    //         return grades;
    //     }

    //     return grades;
    // }

    // return 0;

    return grades.map((n) => {
        // find the difference after division with 5
          let diff = 5 - (n % 5);
        // make our test cases and add the diff if condition is true
          if(diff < 3 && n >= 38) {
              n += diff;
          }
          return n;
      })
    

}


console.log(grade([73, 67, 38, 33]))
