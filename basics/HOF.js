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


const higherOrder = n => {
  const oneFun = m => {
      const twoFun = p => {
          return m + n + p
      }
      return twoFun
  }
  return oneFun
}
console.log(higherOrder(2)(3)(4));


const myNums = [2, 3, 4, 5]
const sumArray = arr => {
    let total = 0
    arr.forEach(function(element){
        total += element
    });
    return total
}
console.log(sumArray(myNums));
  
function Hello(){
  console.log("Hello Lakshman ! ", Math.floor(Math.random()*16) );
}
setInterval(Hello, 1000);
// setTimeout(Hello, 2000);

// NOTE:- all higher-order functions are first-class functions, not all first-class functions are higher-order functions