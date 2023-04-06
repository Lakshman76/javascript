function product(n,p){
    this.name = n;
    this.price = p;
    return {x:10, y:20};
}

const p = new product("iphone 14", "100000");
// when we didn't return anything
//console.log(p);  // product { name: 'iphone 14', price: '100000' }
// when we return object then 
console.log(p);  // { x: 10, y: 20 }

/**************NOTE***************/
/** 1-> this in js is different from other language.
2-> this keyword refers to the context from where we call the function.
3-> this keyword in class is approx same in function.
*/

/**
 * if we don't return anything js return newly created obj.
 * if we return primitive type value then js also return newly created object.
 * if we return custom object then js will return custom object not newly created object.
 */


/*************** arrow function **********/
/*
const product2 = (p,n) => {
    this.name = n;
    this.price = p;
}
const p2 = new product2("iphone","90000");
console.log(p2);  // TypeError: product2 is not a constructor
*/ 
// we cannot use arrow function as a class in javascript

const product2 =function(p,n) {
    this.name = n;
    this.price = p;
}
const p2 = new product2("iphone","90000");
console.log(p2);  // product2 { name: '90000', price: 'iphone' }