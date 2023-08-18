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