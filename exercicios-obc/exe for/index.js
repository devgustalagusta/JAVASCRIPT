let valor = prompt("Qual número usaremos na tabuada?")
let resultado = ""
for (let i = 1; i <=20; i++ ) {
    resultado += valor + " * " + i + " = " + (valor * i) + "\n"
}
alert("resultado:\n" + resultado)