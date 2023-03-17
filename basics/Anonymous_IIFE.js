// Anonymous function 

const Anonymous = function(){
    console.log("Inside anonymous funcion");
};
Anonymous();

// IIFE - Immediately invoked function expression 
// or self invoking function 

(function(x){
    console.log(x*x); // 25
    console.log(x ** 3); // 125
})(5);

// or using arrow function
((x) => {
    console.log(x ** 2);
})(4);

(function(){
    console.log("Hello, World!"); // Hello, World!
})();

