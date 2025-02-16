class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
       console.log(`A new courese was added by ${this.username}`);
        
    }
}

const tea= new Teacher('tea','tea@teacher.com','12345')

tea.addCourse()

const masalaTea= new User('MasalaTea')
masalaTea.logMe()

console.log(masalaTea instanceof Teacher);
