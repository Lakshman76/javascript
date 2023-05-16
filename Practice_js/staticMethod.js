// static method is defined in the class itself.
class person{
    static myDetail(name){
        console.log('my name is',name);  // my name is Lakshman
        console.log(this);  // [class person]
    }
}
// for calling static method we don't need to create object of the class instead we can call with the class name
person.myDetail('Lakshman');

// let p = new person();
// p.myDetail('laksh');
// We cannot access static method with the help of object as well like other programming language.