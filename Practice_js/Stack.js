class stack{
    #arr;
    constructor(){
        this.#arr = [];
    }
    push(x){
        this.#arr.push(x);
    }
    pop(){
        this.#arr.pop();
    }
    top(){
        if(this.#arr === 0) return undefined;
        return this.#arr[this.#arr.length-1];
    }
}

let st = new stack();
console.log(st.top());  // undefined
st.push(5);
st.push(10);
st.push(15);
console.log(st.top());  // 15
st.pop();
console.log(st.top());  // 10
st.push(20);
console.log(st.top());  // 20