// if

// if(condition){
//     code to be execute
// }

// <, >, <=, >=, =, ==, ===, !=, !==, !===

//  if (2==='2'){
//     console.log("executed");
//  } 
//  else{
//    console.log("not executed");
//  }


//  const temperature=41;
//  if(temperature<40){
//   console.log("less than 40");
//  }
//  else{
//   console.log("greater than 40");
//  }


// const score= 200;

// if (score>100){
//   const power="fly";
//   console.log(`User power: ${power}`);
// }

// console.log=(`User power: ${power}`);

// const balance = 700;
// if(balance<500){
//   console.log("less than 500");
// }
// else if(balance<750){
//   console.log("less than 750");
// }
// else if(balance ==1000){
//   console.log("balance is 1000");
// }
// else if(balance>1000){
//   console.log("greater than 1000")
// }


const userLoggedIn= true;
const debitCard= true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if (userLoggedIn && debitCard){
  console.log("Allow to buy course");
}
else{
  console.log("don't allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
  console.log("User logged in");
}else{
  console.log("User not logged in");
}