function some (a,b) {
    alert("a soma de " + a + " " + b + " é " + (a + b))
}
some(7,6)

function criarUsuario (nome,email,senha,tipo = "adm") {
    Usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo
    }
}

// RETORNO DE FUNÇÃO

