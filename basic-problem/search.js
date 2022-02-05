

const products = [
    {name:'iphone 14', price:70000},
    {name:'samsung Galaxy 15', price:60000},
    {name:'dell laptop', price:50000},
    {name:'asus', price:30000},
    {name:'apple watch ', price:20000},
    {name:'pluse phone ', price:15000},
];

// for(let i = 0; i< products.length; i++){

//     if(products[i].name == 'asus'){
//         console.log(products[i])
//     }

// }

// for(let product of products){
//     if(product.name.includes('iphone')){
//         console.log(product);
//     }
// }


function searchProduct(products, searchText){
    let match = [];
    for(let product of products){
        if(product.name.includes(searchText)){
            match.push(product);
        }
    }

    return match;
}


console.log(searchProduct(products, 'asus'));