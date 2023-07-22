// Hoisting :- 
// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

/****************** Variable Hoisting ************************/

// ++++++++++++++++++ var +++++++++++++++++++
console.log(a1); // undefined
var a1 = 5;
// or
var a2;
console.log(a2); // undefined
a2 = 5;

a3 = 5;
console.log(a3);
var a3;

// ++++++++++++++++++++ let ++++++++++++++++++
// console.log(b1); // ReferenceError
let b1 = 6;

// b2 = 6; // ReferenceError: Cannot access 'b2' before initialization
// console.log(b2); // ReferenceError: Cannot access 'b2' before initialization
let b2;

// ++++++++++++++++++++ const ++++++++++++++++++
// console.log(c); // ReferenceError
const c = 7;

