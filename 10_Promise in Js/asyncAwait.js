// async function greet(){
//     return "Hello, Sandy!"
// }
// console.log(greet()); 
// Output: Promise { 'Hello, Sandy!' }

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true
//         if(!error){
//             resolve({username:'javascript',password:'123'})
//         } else{
//             reject('ERROR: JS  went wrong!')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//  try {
//     const respone= await promiseFive
//     console.log(respone);
    
//  } catch (error) {
//     console.log(error);
    
//  }
// }
// consumePromiseFive()

async function getAllUsers(){
  const response= await fetch('https://jsonplaceholder.typicode.com/users')
  const data= response.json()
  console.log(data); 
  
}
 
getAllUsers()
