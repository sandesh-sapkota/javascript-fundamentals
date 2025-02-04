//******* reduce() Combining Data into a Single value */
 //Syntax:
//  array.reduce((accumulator,cuurentValue,index,array)=>{
    //operation to perform
//  },initialValue);

// Example to summing numbers:

const numbers = [1,2,3,4,5];
const sum = numbers.reduce((acc,currVal)=>acc+currVal,0);
// console.log(sum);cls



const shoppingCart = [
    {itemName: 'js course',
     price: 2999
    },
    {itemName: 'mobile dev course',
     price: 5999
    },
    {itemName: 'data science course',
     price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(priceToPay);


// Finding the maximum value.

const nums=[10,5,20,8,5,14,80,102,61];

const maxNum= nums.reduce((acc,currVal)=> currVal > acc ? currVal : acc , nums[0]);

console.log(`The maximum value in the given array is: ${maxNum}`);
