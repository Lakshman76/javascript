// Anonymous function 

const Anonymous = function(){
    console.log("Inside anonymous funcion");
};
Anonymous();

// IIFE - Immediately invoked function expression 
// or self invoking function 

(function(x){
    console.log(x*x); // 25
})(5);
(function(){
    console.log("Hello, World!"); // Hello, World!
})(5);