/***************************map() method****************************/ 
const numbers =[1,2,3,4,5];

let sqrtOfNumber = numbers.map(num => num ** 2);
console.log(sqrtOfNumber); // [ 1, 4, 9, 16, 25 ]

numbers.map((value,index,arr) => console.log(`Value : ${value} of index ${index} in array ${arr}`));
// note :- It is almost same as forEach() method.

/***************************filter() method****************************/

const heros = ["naagraj", "doga", "dhruva", "maniraj"];

let herosWithRaj = heros.filter( hero => hero.endsWith('raj') );
console.log(herosWithRaj); // [ 'naagraj', 'maniraj' ]

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word =>word.length > 6); 
console.log(result); // [ 'exuberant', 'destruction', 'present' ]

/***************************reduce() method****************************/

const cartBill = [199, 49, 399, 85];
initialValue = 0;
const sumOfCartBill = cartBill.reduce((prev, current) => prev + current, initialValue); // initial value used to intialize prev when current value is 199.
console.log(sumOfCartBill); // 732

/***************************every() method****************************/

const gameScore = [200, 100, 310, 300, 250, 150];
//check if all values are numbers
const gameScoreCheck = gameScore.every((v) => typeof(v === 'number'));
console.log("check: ", gameScoreCheck); // check:  true

// check all values are less than specified no. or not
const allNum = [30,23,15,9,34,22];
let highest = 40;
const check = allNum.every(num => num < 40);
console.log(check); // true

/*************************** find() method****************************/
// It return first element which satisfies the condition
const arr = [5, 12, 8, 130, 44];
const found = arr.find(element => element > 10);
console.log(found); // 12

// findIndex() method 
let index = arr.findIndex(num => num > 100);
console.log(index); // 3

/*************************** some() method****************************/
// It returns true if any one of the element satisfies the condition otherwise it returns false.
const arrayOfNums =[3,5,7,9,2];
let isAnyEven = arrayOfNums.some(num => num%2 == 0);
console.log(isAnyEven); // true

/*************************** sort() method****************************/

let str1 = ['abc','cde','aze','box','cat','dog'];
let modifiedStr = str1.sort();
console.log(modifiedStr);  // [ 'abc', 'aze', 'box', 'cat', 'cde', 'dog' ]

let num1 = [30,43,56,100,120,25,300,31,205];
let modified_num1 = num1.sort();
console.log(modified_num1); // [  100, 120, 205, 25, 30, 300,  31, 43, 56  ]
