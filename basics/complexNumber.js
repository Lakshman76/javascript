class addComplexNumber{
    #real;
    #imag;
    constructor(r,i){
        this.#real = r;
        this.#imag = i;
    }
    get real(){
        return this.#real;
    }
    get imag(){
        return this.#imag;
    }
    additon(c){
        this.#real += c.real;
        this.#imag += c.imag;
    }
    display(){
        console.log(`${this.#real} + ${this.#imag}i`);
    }
}
const c1 = new addComplexNumber(3,5);
const c2 = new addComplexNumber(2,4);
c1.additon(c2);
c1.display();