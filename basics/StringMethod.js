//1. at() :- 
const superHero = "Iron-man";
console.log(superHero.at(4)); // -
console.log(superHero.at(7)); // n 
console.log(superHero.at(13)); // undefined

const myName = "Lakshman"
console.log(myName.at(-3)); // m
console.log(myName.at(-10)); // undefined

// 2. charAt() :-
console.log(myName.charAt(3)); // s 
console.log(myName.charAt(10)); // 

console.log(myName.charAt(-3)); // 
console.log(myName.charAt(-10)); // 
console.log(myName.charAt(5)); // m 