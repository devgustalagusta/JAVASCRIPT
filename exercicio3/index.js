const idade = prompt("Informe a sua Idade:")

if (idade > 18) {
    alert("Você é maior de idade!")
} else if (idade > 12) {
    alert("Você é adolescente!")
} else if (idade > 4) {
    alert("Você é criança!")
} else {
    alert("-")
}