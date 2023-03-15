// Arrow function 

// 1. one parameter and single return.
const square = (x) => x*x;
console.log(square(9)); // 81

// 2. Multiple parameter and a single return.
const add = (x , y) =>  x+y;
console.log(add(7,9));  // 16

// 3. Multiple parameter and more than one statement.
let addThree = (x,y,z) => {
    console.log(`Addition of ${x} , ${y} and ${z} :`);
    return x+y+z;
}
console.log(addThree(5,7,9)); // 21

// returning object

function sumAndDifference(x, y) {
    return ({ sum: x + y, difference: x - y });
}
console.log(sumAndDifference(13,5));  // { sum: 18, difference: 8 }

// or
const Arrow_sumAndDifference = (x,y) => ({ sum: x + y, difference: x - y });

console.log(Arrow_sumAndDifference(7,5));  // { sum: 12, difference: 2 }