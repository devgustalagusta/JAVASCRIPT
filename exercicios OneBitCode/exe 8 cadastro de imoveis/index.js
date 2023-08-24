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
            const imovel = {}
            imovel.nome = prompt("Qual o nome do proprietario?")
            imovel.quartos = prompt("Qual a quantidade de quartos?")
            imovel.banheiros = prompt("Qual a quantidade de banheiros?")
            imovel.garagem = prompt("Possuí uma garagem?")
            alert("Imovél salvo com sucesso!")
            confirmacao = confirm(
                "Salvar este imovél?\n" +
                "\nProprietário: " + imovel.nome +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem? " + imovel.garagem
            )
            if (confirmacao) {
                imoveisSalvos.push(imovel)
            }
            break
        case "2":
            for (i = 0; i < imoveisSalvos.length; i ++) {
                alert(
                    "Imovél " + (i + 1) +
                    "\nProprietário: " + imoveisSalvos[i].nome +
                    "\nQuartos: " + imoveisSalvos[i].quartos +
                    "\nBanheiros: " + imoveisSalvos[i].banheiros +
                    "\nGaragem: " + imoveisSalvos[i].garagem
                )
            }
            break
        case "3":
        alert("Saindo.")
            break
        default:
            alert("Operação invalida")
    }
} while (menu !== "3")