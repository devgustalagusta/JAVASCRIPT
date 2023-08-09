const entrada1 = prompt('Digite um número:')
const entrada2 = prompt('DIgite outro número:')

const numero1 = parseFloat(entrada1)
const numero2 = parseFloat(entrada2)

let soma = numero1 + numero2
let sub = numero1 - numero2
let mult = numero1 * numero2
let div = numero1 / numero2

alert("Resultado:\n" + "A soma dos dois valores deu:" + soma + "\nA subtração dos valores deu: " + sub + "\nA multiplicação dos valores deu: " + mult + "\nA divisão dos valores deu: " + div)