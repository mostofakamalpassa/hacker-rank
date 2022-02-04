function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let h = x1-x2;
    let v = v1 -v2;
    if(v1 > v2 && h%v == 0){
        return "YES";
    }else{
        return "NO";
    }

}

console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(0, 3, 4, 2));