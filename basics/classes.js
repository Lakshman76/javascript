/***************** class in javasscript *********************/

// define class
class myDetail{
    myName(){
        console.log("Lakshman kumar");
    }
}
// create object of class myDetail.
const detail = new myDetail();
detail.myName(); // Lakshman kumar
console.log(detail); // myDetail {}

// creating new class and adding some data in class.
class myDetail2{
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    setCourse(course){
        this.course = course;
    }
    introduce(){
        console.log(`my name is ${this.name} , age ${this.age} and course is ${this.course}`);
    }
    introduction(){
        return `my name is ${this.name} , age ${this.age} and course is ${this.course}`;
    }
}
const detail2 = new myDetail2();
detail2.setName("Lakshman kumar");
detail2.setAge(18);
detail2.setCourse("BCA");
console.log(detail2);  // myDetail2 { name: 'Lakshman kumar', age: 18, course: 'BCA' }
console.log(detail2.name);  // Lakshman kumar
console.log(detail2.age);  // 18
console.log(detail2.course);  // BCA
console.log(detail2.introduce());  // undefined as function doesn't retun anything but only print which is inside console in introduce() method.

console.log(detail2.introduction());  // my name is Lakshman kumar , age 18 and course is BCA