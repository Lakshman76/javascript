/**************** TYPES OF FOR LOOPS ***************************/

// simple for loop.
let myFrineds = ['prakash','Abhisek','Anmol','Nitin','Vishal'];
// print my friends name using for loop.
for (let i = 0; i < myFrineds.length; i++) {
    console.log(myFrineds[i]);    
}

// FOR IN LOOP
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
for (const key in myFrineds) {
    console.log(key);  // it gives index of all elements.
    console.log(myFrineds[key]);  // prakash    Abhisek    Anmol   Nitin   Vishal  (all are in new line)
}

// FOR OF LOOP