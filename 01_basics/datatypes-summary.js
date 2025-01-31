// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// js is dynamically typed language or wealky typed.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn= false;
const outsideTemp= null;
let userEmail;

const id= Symbol('123');
const anotherId= Symbol('123');

console.log(id===anotherId);

const bigNumber = 212222221232124531232n;


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //object

//array
let myObj={
    name:"sandy",
    age:21,
}

//function

const myFunction=function(){
    console.log("hi sandy");
}

myFunction()

//+++++++++++++++++++++++++++++++

// Stack(Primitive data type) , Heap(Non-Primitive data type)

let myName = "SandySapkota"

