const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App{
    static #users = []

    static findUser(email){
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser(email, fullname){
        const userExists = app.findUser(email)
        if (userExists){
            this.#users.push(new User(email, fullname))
        }
    }

    static deposit(email, value){
        const user = App.findUser(email)
        if(user){
            const user = App.findUser(email)
            user.account.addDeposit(newDeposit)
        }
    }

    static tranfer(fromUserEmail, toUserEmail, value){
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUser){
            const newTransfer = new Transfer(fromUser, toUser, value)
            toUser.account.addTranfer(newTransfer)
        }
    }

    static changeLoanFee(newFeePercentage){
        Loan.fee = newFeePercentage
    }
}