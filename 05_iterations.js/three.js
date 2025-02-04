//****for of */

// const numbers=[1,2,3,4,5];

// for (const number of numbers) {
    // console.log(number*2);
// }

const greetings = "Hello world!";

for (const greet of greetings) {

    // console.log(`Each character is: ${greet}`);
}

//***Map */
// -> it doesnot modify original Array.
// -> it creates a new Array.

// const newArray = oldArray.map((element, index, array) => {
//     return someTransformation;
// });

// const numbers=[1,2,3,4,5];
// const squared=numbers.map(num=>num*num);
// console.log(`new array with squared: ${squared}`);
// console.log(" ");
// console.log(`old array with numbers: ${numbers}`);

//change to uppercase using map()

const words = ["hello", "world", "javascript"];

const uppercasWords=words.map(word=>word.toUpperCase());

console.log(uppercasWords);


