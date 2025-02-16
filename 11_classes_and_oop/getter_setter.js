class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email= value
    }

    get password(){
        return `${this._password}sandy`
    }

    set password(value){
        this._password= value
    }
}


const sandy= new User('sandy@dy.ai','abc')
console.log(sandy.password);
console.log(sandy.email);
