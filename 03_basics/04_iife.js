// Immediately Invoked Function Expressions (IIFE)

(function(){
    console.log("hello bro ! k xa khabar?");
})();



//****IIFE with Parameters

(function(name){
    console.log(`Hello, ${name}!`);
})("Sandy");


//***IIFE Using Arrow Function */

  (() => {
    console.log("This is an IIFE with an arrow function!");
})();


//******IIFE Returning a Value */

const result = (function(a,b){
    return a+b;
})(5,7);

console.log(result);