// Singleton object
const instaUser = new Object();
instaUser.id = 123;
instaUser.name = "sam";
instaUser.isLoggedIn = false;

console.log(instaUser); // { id: 123, name: 'sam', isLoggedIn: false }

// nesting of object
const regularUser = {
    email : "laksh@google.com",
    fullName : {
        firstName : "Lakshman",
        lastName : "Kumar"
    }
}

console.log(regularUser);// { email: 'laksh@google.com', fullName: { firstName: 'Lakshman',lastName: 'Kumar' }  }

console.log(regularUser.fullName.firstName); // Lakshman

// Adding two objects

const obj1 = { 1:'a', 2:'b'};
const obj2 = { 3:'a', 4:'b'};

const objSum1 = {obj1, obj2}
console.log(objSum1); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const objSum2 = Object.assign(obj1, obj2);
// It assign value of obj2 into obj1.
console.log(objSum2); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = { 5:'c', 6:'d'};

const objsum3 = {...obj1, ...obj3};
console.log(objsum3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }

// How data come from database

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
];
console.log(users);
console.log(users[0].email); // abc@gmail.com

console.log(Object.keys(instaUser)); // [ 'id', 'name', 'isLoggedIn' ]  --> Array type

console.log(Object.entries(instaUser)); // [ [ 'id', 123 ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]  --> Array of array

