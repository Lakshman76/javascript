/********************** closures in js *******************/
// it is a combinition of more than one function together means nesting of function.
// closure gives us a way to access the outer function scope from inside inner function.

function outer(){
    let outerValue = "I'm outer";

    function inner(){
        let innerValue = "I'm inner";
        console.log(outerValue);

        function innerOfInner(){
            let innerOfInnerValue = "i'm Inner of Inner";
            console.log(outerValue +" "+ innerValue);
        }
        innerOfInner();
    }
    inner();
}
outer(); /* o/p - I'm outer
   I'm outer I'm inner */
//inner();  --> error
// console.log(outerValue);  --> eeror
console.log(outer.outerValue);  // undefined