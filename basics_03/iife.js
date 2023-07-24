// IIFE -  Immediately Infoked Function Expression

// Named IIFE
( function one(){
    console.log(`I'm first IIFE`);
})();  
// I'm first IIFE

// NOTE - When you want to start write second IIFE then you must have to put semicolon on first IIFE.

( (name)=>{
    console.log(`my name is ${name}`);
})('unnamed IIFE')
// my name is unnamed IIFE