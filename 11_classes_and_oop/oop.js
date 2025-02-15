const user= {
    username: "sandy",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log('Got user details from database');
        console.log(this.username);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



function User(username, loginCount, isLoggedIn){
    this.username= username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    this.greeting= function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne= new User('Sandy',7,true)
const userTwo= new User('bro',9,false)
// console.log( userOne.constructor);
// console.log( userTwo);
console.log(userOne instanceof User); //true


