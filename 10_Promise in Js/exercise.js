// Exercise: Coffee Shop ☕

// You own a coffee shop and serve coffee to customers.

// It takes 3 seconds to prepare coffee.
// If the coffee machine is working, the customer gets "☕ Your coffee is ready!".
// If the coffee machine is broken, the customer gets "❌ Sorry, the coffee machine is broken.".
// After serving or rejecting, print "👋 Thanks for visiting!" at the end.

console.log('👨‍🍳 Making coffee...');
let coffeeMachineWorking=true;
let makeCoffee= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(coffeeMachineWorking){
            resolve('☕ Your coffee is ready!')
        }else {
            reject('❌ Sorry, the coffee machine is broken.')
        }
    },3000)
})

makeCoffee.then((ready)=>{
    console.log(ready);
})
.catch((sorry)=>{
    console.log(sorry);
})
.finally(()=>{
    console.log('👋 Thanks for visiting!');
    
}) 