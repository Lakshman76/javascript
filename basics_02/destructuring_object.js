// Object destructuring in javascript 

const myObj = {
    name : 'Lakshman',
    id : 102,
    course : 'BCA'
}

console.log(myObj); // { name: 'Lakshman', id: 102, course: 'BCA' }

// to access name we have many option

console.log(myObj.name); // Lakshman
console.log(myObj['name']); // Lakshman

//Access using Destructuring 

const {name} = myObj;
console.log(name); // Lakshman

// Change name to myName 
const { name : myName } = myObj;
console.log(myName); // Lakshman

const {id : myId  } = myObj;
console.log(myId); // 102
