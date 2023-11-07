class User{
    constructor(fullName,email,password){
        this.fullName = fullName
        this.email = email
        this.password = password
    }
    login(email,password){
        if(this.email === email && this.password === password){
            console.log("Login realizado com sucesso!")
        } else {
            console.log("Falha ao fazer login, Email ou senha incorretos.")
        }
    }
}

const gustavo = new User("Gustavo", "gustavo@gmail.com", "12345")
console.log(gustavo)
gustavo.login("gustavoemail.com, 54321")