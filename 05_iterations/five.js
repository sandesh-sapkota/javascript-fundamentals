
// array.forEach(function(element, index, array) {
    // Code to execute on each element
// });

// OR using an arrow function

// array.forEach((element, index, array) => {
    // Code to execute on each element
// });



// let numbers = [10, 20, 30];

// numbers.forEach((num, index, arr) => {
//     console.log(`Element: ${num}, Array: ${arr}`);
// });


// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//     console.log(num * 2);  // Output: 2, 4, 6, 8, 10
// });

// const coding = ['js','ruby','java','python','cpp'];
 
// coding.forEach((item)=>{
//     console.log(`The programming language is:${item}`);
    
// });

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'java',
        languageFileName: 'jav'
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})
