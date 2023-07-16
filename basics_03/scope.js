let a = 10;
const b = 20;
var c = 30;

{
    // console.log(a); // error
    // console.log(b); // error
    console.log(c);// 30
    let a = 40;
    const b = 50; 
    var c = 60;
    console.log(a);// 40
    console.log(b);// 50
    console.log(c);// 60
}
console.log(a);// 10
console.log(b);// 20
console.log(c);// 60