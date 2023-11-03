class User{
    constructor(){
        this.fullName = "Gustavo Pessoa"
        this.email = "Gustavo@gmail.com"
        this.password = "12345"
    }
    login(second){
        this.second = second
        this.email = "Gustavo@gmail.com"
        this.password = "1234"
    }
}

const usuario = new User
const usuario2 = new User ("second")
console.log(usuario)
console.log(usuario )