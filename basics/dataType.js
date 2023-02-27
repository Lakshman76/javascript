//  **************** Primitive *************** 
// 1. Number:- It can be any ineteger value, float value and NaN(not a number) and infinity
let num=15;
let not_a_num = NaN;
console.log(typeof(num));// number
console.log(typeof(not_a_num));// number
let infinity = Number.NEGATIVE_INFINITY;
console.log(infinity); //  -Infinity
console.log(typeof(infinity));// number

// 2. String:- It is a sequence of character enclosed in single or double quote.
let str="Lakshman"
console.log(typeof(str));// string

// Boolean:- It has a logical values that is true and false
let is_js=true;
console.log(typeof(is_js));// boolean

// Undefined:- only declare variable but not assign any value. 
let un_assigned;
console.log(typeof(un_assigned)); // undefined

// NULL:- It means nothing or empty value (not even zero).
let empty=null;
console.log(typeof(empty)); // object

// Symbol:-It can be used as an object property key.

//  ******** Non primitive *************
//Array:- It a special type of object that is used to store a collection of elements.Each element can be of any data type and can be accessed by index. It is zero based index.
const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof (heros)); // It also returns object

//Object:- It is a collection of property has a name and a value.
let myObj = {
    name: "Lakshman",
    age: 18,
    branch: "cs"
}
console.log(typeof (myObj)); // object
console.log(myObj);  // { name: 'Lakshman', age: 18, branch: 'cs' }
console.log(myObj.name);  // Lakshman

// Function
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof(myFunction));// it returns function