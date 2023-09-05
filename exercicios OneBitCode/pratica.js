const arr = ["frodo", "sam", "merry", "pippin", "Gandalf", "Aragorn", "legolas", "gimli"]
console.log(arr)

// -push- serve para acresentar um elemento no final do array
let tamanho = arr.push("Borunir")
console.log(arr)
console.log(tamanho)

// -unshift- serve para acrescenta elementos no começo do array
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// -pop- remove o ultimo elemento de um array
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// -shift- remove o primeiro elemento de um array
Elemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// -includes- pesquisa por um elemento e devolve um resultado booleano
const inclui = arr.includes("Gandolf")
console.log(inclui)

// -indexOf- devolve o indice da palavra chave
const indice = arr.indexOf("Gandalf")
console.log(indice)

// cortar e concatenar
// -slice-
const hobbits = arr.slice(0,4)
const outros = arr.slice(-4)
// pega elementos a partir do ultimo '-1'
console.log(arr)
console.log(hobbits)
console.log(outros)

// -concart- 
const sociedade = hobbits.concat(outros, "Baromir")
console.log(sociedade)

// substituição dos elementos
//-splice-
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}

// Arrays Bidimencionais

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

//console.table(matriz)

//matriz[0].push("Nova coluna")
//1 1   1'  console.table(matriz)

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const elementu = matriz[i][j]
        console.log("posição: (" + i + ", " + j + ") valor:" + elementu)
    }
}

let pessoa = {}

pessoa.nome = "gustavo"
pessoa.idade = 20
pessoa.irmaos = ["Thais", "Thiago", "Thayna"]
pessoa.enderoco = {
    rua:"B 255",
    numero: 255,
    bairro: "paupina",
}
console.log(pessoa)

//  RETORNO DE UMA FUNÇÃO

function calcularMedia (a,b) {
    const media = (a + b) / 2
    return media
}
const resultado = calcularMedia(7,2)
console.log(resultado)

function criarProduto (nome,preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}
//const notebook = criarProduto("Notebook lenovo ideapad 3i", 2142)
//console.log(notebook)

console.log(criarProduto("Notebook lenovo ideapad 3i", 2142))

// uma função so pode retornar uma única vez

function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
console.log(maioridade(20))
console.log(maioridade(13))

// ESCOPO

let pokemon = "charmander" // escopo externo

function evoluir() {   // escopo interno
    pokemon = "charmeleon"
}
console.log(pokemon)
evoluir()
console.log(pokemon)

// variaveis escritas no escopo interno, não funcionam no escopo externo

// metodos
let pessoaa = {
    nome: "gustavo",
    idade: 20,
    dizerOla () {
        console.log("Olá mundo eu me chama " + this.nome)
    }
}
console.log(pessoaa)
pessoaa.dizerOla()

// Funçoes recursivas
// DIVIDIR
function dividir(num){
    console.log(num)
    if (num % 2 === 0) {
        dividir(num/2)
    } else {
        return num
    }
}
dividir(16)

// FATORIAL
function fatorial(num){
    console.log("Número: " + num)
    if(num === 0) {
        return 1
    } else if (num === 1){
        return 1
    } else{
        console.log(num + " * " + (num - 1))
        return num * fatorial(num-1)
    }
}
console.log(fatorial(5))

// Funçoes anonimas

function somar(a,b){
    return a + b
}

let operacao = somar

console.log(operacao(4,5))
// função anonima
operacao = function (a,b){
    return a - b
}

console.log(operacao(4,5))

const operacao2 = function(a,b) {
    return a - b
}
console.log(operacao2(2,4))


//  High-Order function ->

function calcular(a,b,operacao){  // <- função maior
    console.log("Realizando uma operação.")
    const resultado = operacao(a,b) // somar (3,5)
    return resultado
}

function somar(x,y) {
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calcular(3,5,somar))

console.log(calcular(8,4, function (x,y) {
    console.log("Realizando uma subtração.")
    return x - y
}))

function exibirElemento(elemento, indice, array) {
    console.log(
        elemento,
        indice,
        array
    )
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento) //  <-- High-Order Function / metodo do array / pode substituir o for para deixar o codico funcional

lista.forEach(function (elemento, indice, array){
    console.log(
        elemento,
        indice,
        array
    )
})

// METODOS NO HIGH-ORDER

const personagens = [
    {nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã"},
    {nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino"},
    {nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga"},
    {nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sarcedotisa"},
    {nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro"},
]

// MAP    -- o map mapeia todos os elementos de um array antigo para um novo. melhor utilizado no lugar do "FOR" --
const nomes = personagens.map(function(personagem){
    return personagem.nome
})
console.log(nomes)

// FILTER   -- iltra uma string especifica do array --
const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"
})
console.log(orcs)

// REDUCE   -- serve para tranformar um arrya em outra coisa(number,string,objeto) --
const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
},0)
console.log(nivelTotal)