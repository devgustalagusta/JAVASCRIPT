let valorEmMetros = prompt("Digita um valor de medidas em metros:")

let valorEscolhido = prompt("Para qual parámetro será convertido:\n-Milímetro (mm)\n-Centímetro (cm)\n-Decímetro (dm\n-Decâmetro (dam)\n-Hectômetro (hm)\n-Quilômetro (km))")

switch (valorEscolhido) {
    case "mm":
        milimetro = valorEmMetros * 1000
        alert("O resultado deu " + milimetro + " milímetros.")
        break
    case "cm":
        centimetro = valorEmMetros * 100
        alert("O resultado deu " + centimetro + " Centímetro.")
        break
    case "dm":
        decimetro = valorEmMetros * 10
        alert("O resultado deu " + decimetro + " Decímetro.")
        break
    case "dam":
        decametro = valorEmMetros / 10
        alert("O resultado deu " + decametro + " Decâmetro.")
        break
    case "hm":
        hectometro = valorEmMetros / 100
        alert("O resultado deu " + hectometro + " Hectômetro.")
        break
    case "km":
        quilometro = valorEmMetros / 1000
        alert("O resultado deu " + quilometro + " Quilômetro.")
        break
    default:
        alert("Opção invalida!")
}