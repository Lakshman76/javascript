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

// to assign property of a class we cannot use this keyword inside satic method
class person{
    name;
    age;
    static detail(name,age,course){
        //this.name = n;
        //this.age = age;  // TypeError: Cannot assign to read only property
        //this.course = course;
        console.log(`my name is ${name} and age ${age} and course is ${course}`);
    }
    getDetail(n,age){
        this.name = n;
        this.age = age;
    }
    // in this static method we cannot get error but from this method we cannot access name and age of person.
    static printDetail(){
        console.log(`Name is : ${this.name} and age is : ${this.age}`);
    }
}
person.detail("laksh",18,'BCA');  // my name is laksh and age 18 and course is BCA

let p = new person("Lakshman", 19);
p.getDetail();
person.printDetail();