// First-class function :- In JavaScript, all functions are first-class functions.

function sayHello() {
    console.log("Hello");
}
let myFunc = sayHello;
myFunc();
console.log(myFunc);   // [Function: sayHello]

// Higher order function:- A higher-order function, on the other hand, is a function that takes one or more functions as arguments or returns a function as its result. This means that a higher-order function is a function that operates on functions, either by taking them as arguments or returning them as results.

function multiplyBy(factor) {
    return function(num) {
      return factor * num;
    }
}
  
let double = multiplyBy(2);
let triple = multiplyBy(3);
  
console.log(double(5)); // 10
console.log(triple(5)); // 15
  

// NOTE:- all higher-order functions are first-class functions, not all first-class functions are higher-order functions