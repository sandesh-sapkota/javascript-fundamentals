//🚀 Take user input using readline in js.

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('What is your first name :', function(firstname){
//     rl.question('What is your last name :', function(lastname){
//     console.log(`Your full name is: ${firstname} ${lastname}`);
//     rl.close();
//     });
// });


//🚀   Get Even Numbers (Using filter())

// const numbers = [1,2,3,4,5,6];

// const evenNums = numbers.filter(num=>num%2===0);

// console.log(evenNums);


//🚀  Convert Prices to Nepali Rupees (Using map())

// const Usd = [10,20,50,100,2000];

// const Npr = Usd.map(value=>value*130);
// console.log(Npr);


//🚀   Find the Longest Name (Using reduce())

const names = ["Sandy", "Amit", "Jonathan", "Munu"];

const longestName = names.reduce((acc,currName)=> currName.length > acc.length ? currName : acc , names[0]);

// console.log(longestName);


//🚀 Calculate Total Price of Products

let products = [
    {name: "Laptop", price: 50000, quantity: 1},
    {name: "Phone", price: 30000, quantity: 2},
    {name: "Laptop", price: 20000, quantity: 1},
];

const totalCost = products.reduce((acc,item)=> acc + item.price * item.quantity , 0);

console.log(`The Total Cost of the products purchased is: ${totalCost}`);


