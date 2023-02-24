// function Declaration   with no parameters and arguments.
function function_name() {
    console.log("Hello, World!");
}
function_name(); // calling function  o/p- Hello, World!

// function with Parameters, arguments and return.
function sumOfTwo(x,y) {    // here x and y are parameters
    let sum = x+y;
    return sum;
}
console.log(sumOfTwo(9,9));  // 9,9 are arguments.    o/p - 18
// or
let sum = sumOfTwo(5,7);  // 12
console.log(sum);

// function with only return.
function only_return() {
    return "I'm Lakshman kumar a full stack web developer";
}
console.log(only_return()); // "I'm Lakshman kumar a full stack web developer

// return have no value
function empty_return(name) {
    if(name == undefined){
        return;
    }
    console.log(name);
}
empty_return();  // blank no output
empty_return("Lakshman"); // Lakshman

