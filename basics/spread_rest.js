/********************** spread operator ********************/

let one = [1,2,3,4];
let two = [6,7,8,9];

// concatinate using concat()

// let three = one.concat(two);
// console.log(three); // [ 1, 2, 3, 4, 6, 7, 8, 9 ]
 
// concatinate using spread operator.

let three = [...one , ...two];
console.log(three);  // [ 1, 2, 3, 4, 6, 7, 8, 9 ]

let four = [...one , ...[5,6,7]];
console.log(four); // [ 1, 2, 3, 4, 5, 6, 7 ] 


const obj1 = { name : "Lakshman", x: 42 };
const obj2 = { name : "Laksh", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { name: 'Laksh', x: 42, y: 13 }

// String into Individual Array 

const myName = "lakshman kumar";
console.log([...myName]); // [ 'l', 'a', 'k', 's', 'h', 'm', 'a', 'n',' ', 'k', 'u', 'm', 'a', 'r' ]


// Spread Operator Works as a Function Call 

const num = [1, 2, 3, 4];
function addNumbers(a, b, c, d) {
  return a + b + c + d;
}
console.log(addNumbers(...num)); // 10  it always return 10 as we increase the value of num.