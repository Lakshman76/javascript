// callback function :- A function which is passed to the other function as an argument then it is called a callback function.
// e.g - 
console.log("start");
function sum(num1,num2){
    console.log(`Sum of ${num1} and ${num2} is = ${num1+num2}`);
}
function operation (x,y,callback){
    callback(x,y);
}
operation(5,7,sum);
console.log("end");
/* output is - 
    start
    Sum of 5 and 7 is = 12
    end
 */
// synchronous callback function :- the code which is executed sequentially is known as synchronous callback. the above code is the example of synchronous callback.

// Asynchronous callback function :- the code which is not executed sequentially.
//e.g-
console.log("Start");

setTimeout(() => {
    console.log("i'm executed after 1 sec");
}, 1000);
console.log("End");
/* output of above code -
    Start
    End
    i'm executed after 1 sec
 */

/**********************Nesting callback or callback hell ***************/
// e.g-
console.log("Start");
setTimeout(function () {
    console.log("Executing Function 01");
    setTimeout(function () {
        console.log("Executing Function 02");
        setTimeout(function () {
            console.log("Executing Function 03");
        }, 1000);
    }, 1000);
}, 1000);
console.log("End");
/* output:-
    Executing Function 01
    Executing Function 02
    Executing Function 03
 */
/* This situation is called callback hell where the code is messed up due to multiple nested callback functions. This decreases the readability of the code and makes it difficult to edit.

So to avoid this issue we use different techniques like promises, async, and await. */