// try and catch :- when error occured in our code then the whole code after error will be not working so try and catch is used to handle the error so that other code will be executed. 
// the code that can throw error will be written inside try block and when error occured in try block then it is stopped and given control to the catch block.
// catch block is executed only when error occured inside try block otherwise it is not executed. 
console.log('my name is lakshman');
console.log("i'm from ranchi where MSD belongs to");
try {
    console.log(Lakshman);
} catch (error) {
    console.log(error);  // getting too much long  error in this code.
}
console.log("i'm executable after error occur in rhe above code because error is handled by try-catch");


// to minimize error length use error.message in catch block.
try {
    console.log(Laksh);
} catch (error) {
    console.log(error.message);  // Laksh is not defined
}


// finally :- the code written inside finally block is always executed, so anything which is important is written inside finally block.
try {
    console.log(Laksh);
} catch (error) {
    console.log(error.message);  // Laksh is not defined
}finally{
    console.log("i'm always executed");
}

// user defined error or we can explicit define error 

let doExercise = false;
try {
    if(doExercise === false){
        throw new Error("you don't exercise it is bad habit for health!");
    }
} catch (error) {
    console.log(error.message); // you don't exercise it is bad habit for health!
}finally{
    console.log("Do exercise everyday");
}