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