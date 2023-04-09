const myHeros = ['ironman','thor','spiderman'];
const dcHero = ['superman','batman'];

let heroPower ={
    thor: 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

// define our own object prototype 
Object.prototype.Lakshman = function(){
    console.log(`Lakshman is present in all object`);
}

// calling prototype using array and object as well.
heroPower.Lakshman();  // Lakshman is present in all object
myHeros.Lakshman();  // Lakshman is present in all object

// creating prototype for array

Array.prototype.heyLakshman = function(){
    console.log(`Lakshman says hello to array`);
}

// calling heyLakshman array prototype using array as well as object

myHeros.heyLakshman(); // Lakshman says hello to array
// heroPower.heyLakshman(); // TypeError: heroPower.heyLakshman is not a function
// cannot call array prototype function using object.

/****************** prototypal inheritance ******************/

const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false
}

const TAassistant = {
    makeAssignamet : 'JS assignment',
    fullTIme : true,
    __proto__ : teachingSupport   // old version of prototype and it can inherit the property of teachingSupport.
}
console.log(TAassistant.isAvailable); // false  --> TAassistant also access the property of teachinfSupport.

const student = {
    isStudy : true,
    course : 'BCA'
}
// 2nd way to inherit property using prototype
student.__proto__ = teacher;
console.log(student.makeVideo);  // true

const student2 = {
    name : 'ram'
}

// New version of prototype
Object.setPrototypeOf(student2 ,student);
console.log(student2.course);  // BCA

/******************* some interesting ***************/

const myName = "Lakshman";
console.log(myName.length); // 8

const myName2 = "Lakshman      ";
console.log(myName2.length); // 14

// to solve the uper error we won't use trim() method instead i use prototype for this.

String.prototype.trueLength = function(){
    console.log(`true length is : ${this.trim().length}`);
}
myName2.trueLength(); // true length is : 8  --> now i get right output.

"ram        ".trueLength(); // true length is : 3

console.log("ram       ".length);  // 10