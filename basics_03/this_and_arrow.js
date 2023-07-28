const user = {
    username:"Lakshman",
    course:"BCA",
    welcomeMessage1: function(){
        // console.log(`${username}, Welcome to my profile`); // ReferenceError: username is not defined

        console.log(`${this.username}, Welcome to my profile`);
    },
    welcomeMessage2 : () => {
        // console.log(`${username}, Welcome to my profile`); // ReferenceError: username is not defined

        console.log(`${this.username}, Welcome to my profile`);
    }
}
user.welcomeMessage1(); // Lakshman, Welcome to my profile
user.welcomeMessage2(); // undefined, Welcome to my profile

user.username = "shiva";

user.welcomeMessage1(); // shiva, Welcome to my profile

console.log(this); // {}
/**when run console.log(this);  in browser then it give output as- window object */

const name1 = function(){
    let myName = "Lakshman";
    console.log(this.myName);
}
name1();  // undefined

function name2(){
    let myName = "Lakshman";
    console.log(this.myName);
}
name2();  // undefined

const name3 = () => {
    let myName = "Lakshman";
    console.log(this.myName);
}
name3();  // undefined

