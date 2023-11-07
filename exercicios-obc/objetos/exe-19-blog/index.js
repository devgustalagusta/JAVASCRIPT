const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Titulo do post", "Lorem ipsum ...")

post.addComment("Isaac Pornts", "Bem legal")
post.addComment("gustavo", "Roxeda")

console.log(john)
console.log(post)