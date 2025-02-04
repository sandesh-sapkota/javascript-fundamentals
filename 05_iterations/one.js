// for loop


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(let i=1; i<=5;i++){
//     const element=i;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element)
// }

//***Multiplication Table */

// for(let i=1; i<=10; i++){

//     for(let j=1; j<=10; j++){

//         console.log(`${i} * ${j} = ${i*j}`);

//     }
//     console.log("");
// }


// let myArray=["flash","batman","superman"];
// for(let i=0; i<myArray.length; i++){
//     const element=myArray[i];
//     console.log(element);
// }

//******break and continue */

for(let i=1; i<=20; i++){
    if(i==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is: ${i}`);
}