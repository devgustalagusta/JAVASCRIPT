const nome = prompt("Qual o seu nome:")
let cidades = ""
let contagem = "0"

let visitouCidade = prompt("Você já visitou alguma cidade: (sim) (não)")

while (visitouCidade === "sim" ) { 
    let cidade = prompt("Qual cidade você visitou?")
    cidades += " - " + cidade + "\n"
    contagem ++
    visitouCidade = prompt("Você visitou alguma outra cidade? (sim) (não)")
}
alert(
    "O turista visitou " + contagem + " Cidades\n" +
    cidades
)