let menu = "5"

do {
    menu = prompt(
        "Escolha uma das opções:\n" +
        "1: Primeira opção\n" +
        "2: Segunda opção\n" + 
        "3: Terceira opção\n" +
        "4: Quarta opção\n" +
        "5: Encerrar"
    ) 
    switch (menu) {
        case "1" :
            alert("voce escolheu a opção 1")
            break
        case "2" :
            alert("voce escolheu a opção 2")
            break
        case "3" :
            alert("voce escolheu a opção 3")
            break
        case "4" :
            alert("voce escolheu a opção 4")
            break
        case "5" :
            alert("voce escolheu encerrar")
            alert("encerrando...")
            break
        default :
        alert("invalido")
    }
} while (menu !== "5")