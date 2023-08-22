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