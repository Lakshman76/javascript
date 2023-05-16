class product{
    #rate = 0;
    #name;
    constructor(n){
        this.#name = n;
    }
    // getter 
    get rating(){
        console.log(this.#rate);
    }
    // setter
    set rating(r){
        if(r<0) return;
        this.#rate = r;
    }
    display(){
        console.log(`Displaying product detail ${this.#name} , ${this.#rate}`);
    }
}
let p = new product("iphone 14")
p.display(); // Displaying product detail iphone 14 , 0

console.log(p);  // product {}

p.rating; // 0  --> this call getter method and no need to call as a function.
p.rating = 3;
p.rating // 3 
