/***************** class and object **************** */
// class is like a template and object is real world entity.

class product{
    constructor(n){ // it is a constructor that is auto executed when we create object of a class.
        console.log('calling a constructor');
        this.name = n;  // this keyword refers to the same object we created.
    }
    display(){ // it ia a function or method that shows the behavior of class
        console.log("Displaying a product", this.name); // 
    }
}

const p1 = new product();  // new keyword is used to create a empty plane object.
// console.log(p);  // product {}

console.log(p1); // product { name: undefined }
p1.display();  // Displaying a product undefined

const p2 = new product("Motorola");
console.log(p2); //product { name: 'Motorola' }
p2.display();  // Displaying a product Motorola