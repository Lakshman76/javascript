/************* Promises in javascript ************/
/* 
syntax - 
const promise = new Promise(function(resolve, reject){
    // code to execute
}) 
*/

// one real life example

const ticket = new Promise( (resolve , reject) =>{
    const isBoarded = true;
    if (isBoarded) {
        resolve("you can go easily in the flight");
    }else{
        reject("you are not in the flight");
    }
});
ticket
    .then((data) =>{
    console.log(data);
}).catch( (error) => {
    console.log(error);
})
// o/p - you can go easily in the flight

// another example 

const one = () => {
    return "i'm one";
} 

const two = () => {
    setTimeout(() => {
        return "I'm two";
    }, 3000);
} 

const anotherTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I'm another two");
        }, 3000);
    })
}

const three = () => {
    return "i'm three";
} 

const callFunction = () =>{
    const oneValue = one();
    console.log(oneValue);

    const twoValue = two();
    console.log(twoValue);

    const threeValue = three();
    console.log(threeValue);
}
callFunction();
/* o/p -
i'm one
undefined
i'm three
 */

// to solve this problem we use promises
const callFunction2 = async () =>{
    const oneValue = one();
    console.log(oneValue);

    const twoValue = await anotherTwo();
    console.log(twoValue);

    const threeValue = three();
    console.log(threeValue);
}
callFunction2();
/*
o/p - 
i'm one
I'm another two
i'm three
*/