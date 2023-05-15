//1. at() :- It takes number as a parameter and return a new string. you can pass +ve and -ve integer as well.
const superHero = "Iron-man";
console.log(superHero.at(4));  // -
console.log(superHero.at(7));  // n 
console.log(superHero.at(13)); // undefined

const myName = "Lakshman"
console.log(myName.at(-3));  // m
console.log(myName.at(-10)); // undefined

// 2. charAt() :- It also return new string and taking parameter as integer.
console.log(myName.charAt(3));  // s 
console.log(myName.charAt(10)); // 

console.log(myName.charAt(-3));  // 
console.log(myName.charAt(-10)); // 
console.log(myName.charAt(5));   // m 

// 3. concat() :- It is used to concatinate two or more than two string.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(str2));        // HelloWorld
console.log(str1.concat(" ",str2));    // Hello World
console.log(str1.concat(", ",str2));   // Hello, World
console.log(str1.concat(" Lakshman")); //Hello Lakshman

// 4. endsWith() :- it specifies that whether a string ends with the characters of a specified string, returning true or false as appropriate.
/* Syntax-
endsWith(searchString)
endsWith(searchString, endPosition) - endposition means (index of last character + 1)
*/
//e.g.-
const name = "Lakshman";
const name2 = "Lakshman kumar from ranchi jharkhand";

console.log(name.endsWith("man"));         // true
console.log(name2.indexOf('i'));           // 25
console.log(name2.endsWith("ranchi"));     // false
console.log(name2.endsWith("ranchi", 26)); // true

// 5. includes() :- This method is used to find a specified string is present inside another string or not and return true or false as appropriate. it does the case sensitive search.
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.includes("Dog")); // false 
console.log(sentence.includes("dog")); // true

// 6. repeat() :- it repeats the string as specified number.

const hello = " Hello!";

console.log(hello.repeat(3),"Everyone"); // Hello! Hello! Hello! Everyone