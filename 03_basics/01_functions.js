function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("N");
  console.log("D");
  console.log("Y");
}

// sayMyName()

function addTwoNums(num1,num2){
    console.log(num1+num2);
}

addTwoNums(3,4);

function addTwoNums(num1,num2){
    return num1+num2;
}

const result = addTwoNums(3,5);
console.log("Result is:",result);

function greet(){
    console.log("Hello, Sandy!");
}

greet();


function addNumbers(num1,num2){
    
    return num1 + num2;
}

// const result= addNumbers(5,6);
console.log("Sum is:", result);

function greet() {
    console.log("Hello!");
}

// const result = greet(); // Calling the function
console.log(result); // Output: undefined

// ********Function Expression(Anonymous Function)*****

const multiply= function(a,b){
    return a*b;
};

console.log("Multiplication is:",multiply(5,10));


function loginUserMessage(username){
    if (username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Sandy"))


//*********** Function with Rest Parameters (...args) */
//Used when you don't know how many arguments will be passed.

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,500,1020,2000,5050));


const user = {
    username:"sandy",
    price:199
}

function handleobject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleobject(user);

const myArray=[200,400,500,300];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myArray));