function multipleBy5(num){
    return num*5
}

multipleBy5.power= 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


function createUser(username, price){
    this.username= username
    this.price= price
    return this
}

createUser.prototype.increment= function(){
    this.price++
}

createUser.prototype.printMe= function(){
    console.log(`price is ${this.price}`);
    
}

const chai=new createUser('chai',25)
const tea=new createUser('tea',250)

tea.printMe()