// 1. Number
let num=15;
console.log(typeof(num));

// 2. String
let str="Lakshman"
console.log(typeof(str));

// Boolean
let is_js=true;
console.log(typeof(is_js));

// Undefined
let un_assigned;
console.log(typeof(un_assigned)); // if we don't assign any value and try to find type of that variable then inthis cases it gives output as undefined

// NULL
let empty=null;
console.log(typeof(empty)); // It returns object

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof (heros)); // It also returns object

let myObj = {
    name: "Lakshman",
    age: 18,
}
console.log(typeof (myObj)); // it returns object

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof(myFunction));// it returns function