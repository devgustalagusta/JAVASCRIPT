let saldo = parseFloat(prompt("DIgita um valor em dinheiro"))
let opcao = ""

do {
    opcao = prompt(
    "Você tem " + "R$ " + saldo + " Disponivel\n" +
    "Adicionar dinheiro (1):\n" +
    "Remover dinheiro (2):\n" +
    "Parar programa (3)\n"
    )
    
    switch (opcao) {
        case "1" :
            saldo += parseFloat(prompt("Quanto a ser adicionado:"))
            break
        case "2" :
            saldo -= parseFloat(prompt("Quanto a ser removido:"))
            break
        case "3" :
            alert("Saindo.")
            break
        default:
            alert("Entrada invalida")
    }
} while (opcao !== "3")