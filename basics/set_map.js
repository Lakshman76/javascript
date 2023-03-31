/************************* set() **************** */
/* set in javascript is a data structure that store values of different data type
   but it can store only unique value that is we cannot duplicate value.
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