const carro1 = prompt("Digite o nome do primeiro veículo:")
const velocidadecarro1 = prompt("Qual a velociade do primeiro veículo:")
const carro2 = prompt("Digite o nome do segundo veículo:")
const velocidadecarro2 = prompt("Qual a velocidade do segundo veículo:")

const velocidade1 = parseFloat(velocidadecarro1)
const velocidade2 = parseFloat(velocidadecarro2)

if (velocidade1 > velocidade2) {
    alert(carro1 + " é o veículo mais rápido\n" + 
    "E a sua velocidade é de " + velocidade1 + "Km/h!")
} else if (velocidade1 < velocidade2) {
    alert(carro2 + "é o veículo mais rápido\n" +
    "E a sua velociade é de " + velocidade2 + "Km/h!")
} else if (velocidade1 == velocidade2) {
    alert("A velocidade dos carros é a mesma\n" + 
    "Ambos estão a " + velocidade1 + "Km/h!")
}