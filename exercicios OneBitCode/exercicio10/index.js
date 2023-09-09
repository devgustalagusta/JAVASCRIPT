let candidatos = []
let menu = ""


do {
    menu = prompt(
        "\nVagas de Emprego\n\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair\n"
    )   
    switch (menu){
        case "1":
            const vagas = candidatos.map(function(vaga){
                return vaga.nome
            })
            console.log(vagas)
        break
        case "2":
            const novaVaga = {}
            novaVaga.nome = prompt("Qual o nome do candidato")
            novaVaga.descricao = prompt("Dê uma descrição sobre você")
            novaVaga.data = prompt("Dê uma data limite para a vaga")
            confirmacao = confirm(
                "Deseja salvar estas informações?\n" +
                "\nNome da vaga: " + novaVaga.nome +
                "\nDescrição da vaga: " + novaVaga.descricao +
                "\nData limite de entrega: " + novaVaga.data
            )
            if (confirmacao) {
                candidatos.push(novaVaga)
            }
        break
        case "3":
            break
        case "4":
            break
        case "5":
            break
        case "6":
            alert("Saindo")
            break
        default:
            alert("Opção invalida")
    }
} while (menu !== "6" )