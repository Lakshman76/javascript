/***************** Math in javascript ***************/

console.log(Math);  // Object [Math] {}

// abs() method :- It means absolute value of a number. It converts negative value to a positive value not vice versa.

console.log(Math.abs(-6));  // 6

const sub = 5-9;
console.log(sub);           // -4
console.log(Math.abs(sub)); // 4


// round() method :- it gives round off a given value.

console.log(Math.round(5.78));  // 6
console.log(Math.round(8.38));  // 8

// ceil() method :- it returns ceiling value.

console.log(Math.ceil(3.2)); // 4
console.log(Math.ceil(3.9)); // 4

// floor() method :- It gives floor value.

console.log(Math.floor(6.9)); // 6
console.log(Math.floor(6.1)); // 6

// max() method :- It gives maximum value of given values.

console.log(Math.max(3,4,5,8,10,1)); // 10

// min() method :- It gives minimum value of given values.

console.log(Math.min(3,4,5,8,10,1)); // 1

// random() method :- It returns number between 0 and 1.

console.log(Math.random()); // 0 to 1

/* +++++++++++++ Problem statement +++++++++++++ */

// 1. i want random number between 1 t0 10

console.log(Math.floor((Math.random()*10)+1)); // adding 1 if random no. is something like this 0.0121522 .

// 2.  i Want random number between a given range.
const min = 10, max = 100;

console.log(Math.floor((Math.random())*(max-min+1))+min);