console.log("Hello");

setTimeout(() => {
    console.log("Javascript");
}, 2000);

console.log("World !");

// Callback hell - a callback inside another callback and so on....

const cart = ['Tshirt', 'shirt', 'jeans', 'shoes'];

// example sample that is used in production

api.makeOrder(cart, function (){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet(function(){
                // ans so on... it's look like pyramid of doom
            })
        })
    })
})