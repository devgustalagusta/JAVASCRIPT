let menu = "5"

do {
    let menu = prompt(
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
        case "1" :
            alert("voce escolheu a opção 2")
            break
        case "1" :
            alert("voce escolheu a opção 3")
            break
        case "1" :
            alert("voce escolheu a opção 4")
            break
        case "1" :
            alert("voce escolheu a opção 5")
            break
        default :
        alert("invalido")
    }
} while (menu !== "5")