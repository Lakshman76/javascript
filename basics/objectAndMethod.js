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