class product{
    // private data member
    #rating; // to use private data member we need to declare here first and here we can assign it as well 
    #discount;
    discription;
    constructor(name,price,r){
        this.name = name;
        this.price = price;
        this.#rating = r;
    }
    display(){
        console.log(`Product name is ${this.name} and price is ${this.price} and rating is ${this.#rating}`);
    }
}

let p = new product("iphone 14", 100000,4);
console.log(p.name); // iphone 14
console.log(p.price); // 100000
console.log(p.rating); // undefined  --> we cannot directly access private data member from outside the class 
// but the member function can access private data member so for access private data member we need to call member function 

p.display(); // Product name is iphone 14 and price is 100000 and rating is 4

// js also doesn't print private data member when we want to print object of class. 
console.log(p);  // product { discription: undefined, name: 'iphone 14', price: 100000 }