
// rescursive 

function consoleJs(i){
    if(i > 5){
        return;
    }
    console.log(i);
    consoleJs(i+1);
}

consoleJs(1);