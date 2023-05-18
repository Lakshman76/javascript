const mySymbol = Symbol("myKey");

const mySymbol_2 = Symbol("myKey");

// object literals

const myObj = {
    name : 'Lakshman',
    age : 19,
    "full name" : 'Lakshman kumar',
    mySymbol_2 : "myKey2", // --> it treated like string
    [mySymbol] : "myKey1",
    email : 'Laksh@yahoo.com',
    isLoggedIn : 'false',
    lastLoginDays : ['monday','Wednesday']
}

console.log(myObj.name);  // Lakshman
// console.log(myObj.full name);  --> error can't access like this
console.log(myObj["full name"]);  // akshman kumar

// Best practice to use square bracket.

console.log(myObj.email);  // Laksh@yahoo.com

/*************** Accessing symbol ************/
console.log(myObj[mySymbol]); // myKey1

console.log(typeof myObj['mySymbol_2']); // string

console.log(typeof myObj[mySymbol]);// string

console.log(typeof [mySymbol]); // object

console.log(typeof mySymbol); // symbol

// +++++++++++++++++++++++++++++++

myObj.greeting = function(){
    console.log("Hello JS user");
}
console.log(myObj.greeting); // [Function (anonymous)]
console.log(myObj.greeting()); // o/p - when function (Hello JS user)  &   undefined

myObj.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(myObj.greetingTwo());