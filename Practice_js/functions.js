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
    if(name === undefined){
        return;
    }
    console.log(name);
}
empty_return();  // blank no output
empty_return("Lakshman"); // Lakshman

// Default parameter 
function default_para(str="Lakshman") {
    console.log(str);
}
default_para(); // Lakshman
default_para("Prakash"); // prakash

//  If we take two parameters and first perameter already assigned to default value then if we call function by passing only one argument then it is also assigned to first parameter and second parameter become undefined.
// e.g- 
function multiply(x=5,y) {
    return x*y;
}
console.log(multiply(2));  // NaN   (2 * undefined = NaN)

//  But if we assigned 2nd parameter by default value and calling function by passing one argument then it is assigned
//   to 1st parameter and give expected result . 
function multiply2(x, y=5) {
    return x*y;
}
console.log(multiply2(6)); // 30  (6 * 5 = 30)


// function with *******Unlimited number of parameters. ********
// if we don't know how many parameters needed then we use "arguments"
function sumOfAllParameters() {
    let sum=0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
let result1 = sumOfAllParameters(1,2,3,4,5);
console.log(result1);   // 15

let result2 = sumOfAllParameters(1,2,3);
console.log(result2);   // 6