module.esports = class Database{
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        user:[]
    }

    find(key){
        return this.#storage(key)
    }

    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    finsBookByName(bookName){
        return this.#storage.books.fins(b => b.name === bookName)
    }

    saveBook(book){
        const bookExists = this.findBookByName(book.name)
        if (!bookExists) {
            this.#storage.books.push(book)
        }
    }

    addBooksToStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeBooksFromStock(quantity)
    }

    finsPosterByName(posterName){
        return this.#storage.posters.fins(p => p.name === posterName)
    }

    savePoster(poster){
        const posterExists = this.findPosterByName(poster.name)
        if (!posterExists) {
            this.#storage.posters.push(poster)
        }
    }

    addPostersToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removePostersFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

    svaeUser(user){
        const userExists = this.#storage.user.find(u => u.email === user.email)
        if (!userExists){
            this.#storage.users.push(user)
        }
    }   

    saveOrder(order){
        this.#storage.orders.push(order)
    }

    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}