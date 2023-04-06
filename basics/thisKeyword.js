let obj1 = {
    x:10, y:20,
    display: ()=>{
        console.log(this.x);
    }
}
obj1.display();  // undefined
// in arrow function this keyword is not refers to same object  it has lexical scope.

let obj2 = {
    x:10, y:20,
    display: function() {
        console.log(this.x);
    }
}
obj2.display();  // 10

