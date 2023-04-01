/************************* set() **************** */
/* set in javascript is a data structure that store values of different data type
   but it can store only unique value that is we cannot duplicate it's value.
   we can't access value of set using index.
*/

let mySet = new Set();

mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
mySet.add(2);
mySet.add(5);

console.log(mySet);  // Set(4) { 2, 3, 4, 5 }
console.log(mySet[1]); // undefined  

/******************* set method *****************/

let myArray = [1, 2, 3, 4, 5, 2, 4]
let arraySet = new Set(myArray);
console.log(arraySet);  // Set(5) { 1, 2, 3, 4, 5 }

console.log(arraySet.has(9));  // false
console.log(arraySet.has(4));  // true

console.log(arraySet.delete(3));
console.log(arraySet);  // Set(4) { 1, 2, 4, 5 }

console.log(arraySet.clear()); // undefined
console.log(arraySet);  // Set(0) {}


const fruits = new Set([100,160, 200,300]);

for( const fruit of fruits.values()){
    console.log(fruit);  // 100    160    200    300
}

/*********************************** map() ****************************************/

const myMap = new Map();
console.log(myMap.size);  // 0

let arr = [
    [1, "Mithun"],
    [2, "Alka"],
    [3, "Prabir"],
    [4, "Shivam"],
    [5, "Vinay"],
    [6, "Prabir"],
    [4, "Hitesh"],
  ];
//   el =  [1, "Mithun"]
arr.map(el => myMap.set(el[0], el[1]))
console.log(myMap); 
/* 
Map(6) {
  1 => 'Mithun',
  2 => 'Alka',
  3 => 'Prabir',
  4 => 'Hitesh',
  5 => 'Vinay',
  6 => 'Prabir'
}     */