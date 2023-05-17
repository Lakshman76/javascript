const marvel_heros = ["thor", "Ironman", "spiderman"];

const dc_heros = ["superman", "flash", "batman"]; 
// push() method :- It pushes array into another array as it is, because array also contains array in javascript. 

marvel_heros.push(dc_heros); 
console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros[3][1]); // flash

const myHeros = ["Chandra shekhar azad", "Bhagat singh"];
// concat() :- It returns new array after concatinating two arrays.
const allHeros = myHeros.concat(dc_heros);
console.log(allHeros);  // [ 'Chandra shekhar azad', 'Bhagat singh', 'superman', 'flash', 'batman' ]

const all_new_heros = [...myHeros, ...dc_heros];

console.log(all_new_heros);  // [ 'Chandra shekhar azad', 'Bhagat singh', 'superman', 'flash', 'batman' ]

/********************* Insteresting ********************/

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

const real_another_array_2 = another_array.flat(2);
console.log(real_another_array_2); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

const real_another_array_3 = another_array.flat(1);
console.log(real_another_array_3); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]



console.log(Array.isArray("Lakshman")) // false
console.log(Array.isArray(["Lakshman","Shiva"])) // true
console.log(Array.isArray([])) // true
console.log(Array.isArray('[]')) // false

// more interesting
console.log(Array.from("Lakshman")) // [ 'L', 'a', 'k', 's', 'h', 'm', 'a', 'n' ]

console.log(Array.from([1, 2, 3], x => x * x)); // [ 1, 4, 9 ]

console.log(Array.from({name: "hitesh"})) // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

let size = Array.of(5);
console.log(size.length); // 1

 console.log(Array.of(5,4,7,8)); // [ 5, 4, 7, 8 ]