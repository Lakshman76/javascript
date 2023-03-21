/**************** TYPES OF FOR LOOPS ***************************/

// simple for loop.
let myFrineds = ['prakash','Abhisek','Anmol','Nitin','Vishal'];
// print my friends name using for loop.
for (let i = 0; i < myFrineds.length; i++) {
    console.log(myFrineds[i]);    
}

/***************************FOR IN LOOP*************************** */ 

const myDetail={
    name:'Lakshman',
    age: 18,
    course : 'BCA'
}
for (const key in myDetail) {
    console.log(key);  // give only key value for Object like - name   age   course
    console.log(myDetail[key]); // Lakshman     18      BCA
}
// Acces array named myFriens using for in loop.
for (const index in myFrineds) {
    console.log(index);  // it gives index of all elements.
    console.log(myFrineds[index]);  // prakash    Abhisek    Anmol   Nitin   Vishal  (all are in new line)
}

/***************************FOR OF LOOP*************************** */ 

let superHero = ['iron-man','ant-man','Hulk','vision','thor'];
for (const elements of superHero) {
    console.log(elements); // iron-man    ant-man    Hulk    vision    thor(all are in a new line)
}
/* const myDetail2={
    name:'Lakshman',
    age: 18,
    course : 'BCA'
}
for (const iterator of myDetail2) {
    console.log(iterator); // Error: myDetail2 is not iterable
} */

/***************************FOREACH METHOD*************************** */ 
let nums=[1,2,3,4,5];

nums.forEach(num => console.log(num)); // 1     2      3       4       5

nums.forEach((num,index,arr) => console.log(`index is : ${index} and value is : ${num} of array(nums) : ${arr}`) );

const heros = ["naagraj", "doga", "dhruva", "maniraj"];

heros.forEach(function(el) { console.log(el.toUpperCase())});
// NAAGRAJ      DOGA        DHRUVA      MANIRAJ