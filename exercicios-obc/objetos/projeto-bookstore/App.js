const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Poster = require("./entities/Poster")
const User = require("./entities/User")

module.exports = class App{
    static #database = new Database()

    createUser(name, email, password){
        const user = new User(name, email, password)
        app.#database.saveUser(user)
    }


    getUsers(){
        return app.#database.find('users')
    }

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        app.#database.saveAuthor(author)
    }

    getAuthors(){
        return app.#database.find('authors')
    }

    creatBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        app.#database.saveBook(book)
    }

    addBook(bookName, quantity){
    add.database.addBooksToStock(bookName, quantity)
    }

    getBooks(){
        return app.#database.find('books')
    }

    creatPostewr(name, description, height, width, price, inStock){
        const poster = new Book(name, description, height, width, price, inStock)
        app.#database.savePoster(poster)
    }

    addPoster(posterName, quantity){
    add.database.addPostersToStock(posterName, quantity)
    }

    getPosters(){
        return app.#database.find('posters')
    }

    creatOrder(items, user){
        const order = new Order(items, user)
        app.#database.saveOrder(order)
        order.data.items.foreach(({ product, quantity}) => {
            if (product instanceof Book) {
                app.#database.removeBookFromStock(product.name, quantity)
            } else if (product instanceof Poster) {
                app.#database.removeBookFromStock(product.name, quantity)
            }
        })
    }

    getOrders(){
        return app.database.find('orders')
    }

    showDataBase(){
        app.#database.showDataBase()
    }
}