const num1 = 100;
console.log(num1);          // 100
console.log(typeof(num1)); // number

const num2 = new Number(200);
console.log(num2);          // [Number: 200]
console.log(typeof(num2)); // object

// toFixed() method :-
const num3 = 567.67399;
const num4 = 567.67899;
console.log(num3.toFixed(2));  // 567.67
console.log(num4.toFixed(2)); // 567.68

// toPrecision() method :-

const num5 = 365.567;
console.log(num5.toPrecision(3));  // 366
console.log(num5.toPrecision(4)); // 365.6

// toString() method :- 

const num6 = 143;
console.log(num6.toString().length); // 3


// toLocaleString() method :- 

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); // 10,000,000

console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,000

/**************** Number property*****************/

console.log(Number.MAX_VALUE);         // 1.7976931348623157e+308

console.log(Number.MIN_VALUE);         // 5e-324

console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991

console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

console.log(Number.POSITIVE_INFINITY); // Infinity

console.log(Number.NEGATIVE_INFINITY); // -Infinity