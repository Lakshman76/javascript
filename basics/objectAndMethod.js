// object:- An object is an entity (properties and method) with a certain state and behaviour.
// everything in javascript is an object.

// How to create an object 
// 1. By using literals.
let myobj1 = {
    name : 'Lakshman kumar',
    roll : 62 ,
    course : 'BCA' 
};
console.log(myobj1);  // { name: 'Lakshman kumar', roll: 62, course: 'BCA' }

// 2. By using new keyword (or instance of object)
const myobj2 = new Object();
myobj2.name = 'Lakshman kumar';
myobj2.roll = 62;
myobj2.course = 'BCA';
console.log(myobj2);  // { name: 'Lakshman kumar', roll: 62, course: 'BCA' }


// 3. By using object constructor 
function myobj3(rollNo, myname, mycourse) {
    this.roll = rollNo;
    this.name = myname;
    this.course = mycourse;
};
const obj = new myobj3(62 , 'Lakshman' , 'BCA');
console.log(obj);  // myobj3 { roll: 62, name: 'Lakshman', course: 'BCA' }

/**********************************************************************/

let myobj= {
    name : 'Lakshman kumar',
    roll : 62 ,
    course : 'BCA' 
};
console.log(myobj);  // { name: 'Lakshman kumar', roll: 62, course: 'BCA' }

// *****access data. *********
console.log(myobj.roll); // 62
console.log(myobj['name']); // Lakshman kumar

// ****** Adding data *********
myobj.dob = '26-mar-2004';
console.log(myobj);  // { name: 'Lakshman kumar', roll: 62, course: 'BCA', dob: '26-mar-2004' }
myobj['clg'] = 'RU';
console.log(myobj);  // { name: 'Lakshman kumar', roll: 62, course: 'BCA', dob: '26-mar-2004', clg: 'RU' }

//  ******* Changing data **********
myobj.roll = 58;
console.log(myobj['roll']); // 58
myobj['name']  = 'Lakshman';
console.log(myobj.name); // Lakshman

// **********Deleting data **********
delete myobj.clg;
console.log(myobj);  // { name: 'Lakshman', roll: 58, course: 'BCA', dob: '26-mar-2004' }
delete myobj['dob'];
console.log(myobj);  // { name: 'Lakshman', roll: 58, course: 'BCA' }

/*********************************Object method*************************************/

const obj_method ={
    id : 101,
    name : 'Shiva',
    company : 'google',
    dob : '26-mar-2004'
};
// 1. Object.keys():- It is used to return only property/name of object.
let keyValue1 = Object.keys(obj_method);
console.log(keyValue1);  // [ 'id', 'name', 'company', 'dob' ]

// 2. Object.values():- It return values of property.
console.log(Object.values(obj_method));  // [ 101, 'Shiva', 'google', '26-mar-2004' ]

// 3. Object.entries():- see with example
console.log(Object.entries(obj_method)[0]);  // [ 'id', 101 ]

console.log(Object.entries(obj_method));  // [  [ 'id', 101 ],[ 'name', 'Shiva' ],[ 'company', 'google' ],[ 'dob', '26-mar-2004'] ]

// 4. Object.assign():- It is used to copy the values and properties from one or more source objects to a target object.
// syntax - Object.assign(target, ...sources)
let obj1 = { a: 10 };
let obj2 = { b: 20 };
let obj3 = { c: 30 };
const new_obj = Object.assign({}, obj1,obj2,obj3);
console.log(new_obj); // { a: 10, b: 20, c: 30 }

// 5. Object.freeze():- we cannot change the value of object when we define object as frozen.
Object.freeze(obj_method);
obj_method.id=105;
console.log(obj_method);  // { id: 101, name: 'Shiva', company: 'google', dob: '26-mar-2004' }  -> the value of id doesn't change.
console.log(Object.isFrozen(obj_method));  // true

// 6. Object.seal():- we can't add or remove object properties but we can change the value of existing property.
let obj_seal={
    id :102,
    name : 'Laksh'
};
console.log(obj_seal);  // { id: 102, name: 'Laksh' }
Object.seal(obj_seal);
obj_seal.id=105;
obj_seal.name='Shiva';
console.log(obj_seal);  // { id: 105, name: 'Shiva' }