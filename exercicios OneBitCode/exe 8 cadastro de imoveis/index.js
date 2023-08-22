let menu = ""
let imoveisSalvos = []


do {
    menu = prompt(
        "Você possui: " + imoveisSalvos.length + " Imovéis" +
        "\n\nSalvar um Imovél (1)\n" +
        "Ver Imovéis salvos (2)\n" +
        "Sair (3)"
    )

    switch (menu) {
        case "1":
            nome = imoveisSalvos[0].push(prompt("Qual o nome do proprietario?"))
            quartos = imoveisSalvos[1].push(parseFloat(prompt("Qual a quantidade de quartos?")))
            banheiros = imoveisSalvos[2].push(parseFloat(prompt("Qual a quantidade de banheiros?")))
            garagem = imoveisSalvos[3].push(prompt("Possuí uma garagem?"))
            break
        case "2":
            alert(imoveisSalvos)
            break
        case "3":
        alert("Saindo.")
            break
        default:
            alert("Operação invalida")
    }
} while (menu !== "3")