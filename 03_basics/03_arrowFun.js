const user = {
    username: "sandy",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
   
}
// console.log(this);
// user.welcomeMessage();


//******arrow function */

const chai = () => {
    let username="sandesh";
    console.log(username);
}

// chai(); 


// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }

// console.log(addTwo(3,4))


const addTwo = (num1,num2) => (num1+num2) ;


// console.log(addTwo(3,4))


