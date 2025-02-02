const userEmail="s@sandy.ai";

if(userEmail){
    console.log("got user email");
}
else{
    console.log("doesnot get user email");
}


//***Truthy and falsy values in if-else */

// Value	Truthy or Falsy?
// false     	        ❌ Falsy
// 0	                ❌ Falsy
// "" (empty string)	❌ Falsy
// null	                ❌ Falsy
// undefined	        ❌ Falsy
// NaN	                ❌ Falsy
// true	                ✅ Truthy
// 42	                ✅ Truthy
// "hello"	            ✅ Truthy
// [] (empty array)	    ✅ Truthy
// {} (empty object)	✅ Truthy
// function() {}	    ✅ Truthy


//****Nullish Coalescing Operator(??): null undefined */

let val1;
// val1= 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 15
val1= null ?? 10 ?? 20

console.log(val1);

//****Ternary Operator */
// Shortcut of if-else
// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("cost is expensive") : console.log("cost is cheap");