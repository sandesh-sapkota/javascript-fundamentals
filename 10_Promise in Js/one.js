// const promiseOne= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async task!");
//         resolve()
//     },2000)
// });

// promiseOne.then(()=>{
//     console.log("Async task resolved!");
    
// })

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false; // Change to false to test the reject case
//         if (success) {
//             console.log("Async task!");
//             resolve();
//         } else {
//             reject('Something went wrong');
//         }
//     }, 2000);
// });

// promiseOne.then(() => {
//     console.log("Async task resolved!");
// }).catch((error) => {
//     console.log("Error:", error);
// });


// const promiseTwo= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:'sandy',email:'sandy@example.com'})
//     },1000)
// })

// promiseTwo.then((user)=>{
//     console.log(user);

// })

const promiseThree= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:'abc',password:'12345'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseThree
.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log('The promise is either resolved or rejected!');
    
})


const promiseFour= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:'javascript',password:'12345'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)

})

promiseFour.then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.log(error);
})