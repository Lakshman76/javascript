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