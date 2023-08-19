let nomesDaFila = [ "1- Matheus\n","2- Marcus\n", "3- Paulo\n", "4- Caio\n", "5- Isaac\n"]

let menu = prompt("Opções:\n" + " (1) Novo paciente\n" + " (2) Consultar paciente\n" + " (3) Sair")

if (menu == 1 ) {
    let nomesFila = nomesDaFila.push(prompt("Qual o nome do novo paciente?"))
    alert(nomesFila)
} else if (menu == 2) {
    consultado = nomesDaFila.shift()
    alert(consultado + " foi cunsultado.")
} else if (menu == 3) {
    alert("Encerrando...")
}

//const lista = nomesDaFila.slice(0,4)
//alert(lista)

//for (let indice = 1; indice < nomesDaFila.length; indice++) {
 //   const elemento = nomesDaFila[indice]
//    alert(elemento + " se encontra na posição " + indice)
//}