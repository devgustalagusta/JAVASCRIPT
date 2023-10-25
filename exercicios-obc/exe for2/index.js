let palavra = prompt("digite uma palavra")
let palavrainvertida = ""

for (let i = palavra.length -1; i >= 0; i--) {
    palavrainvertida += palavra[i]
}
if (palavra === palavrainvertida) {
    alert(palavra + " é um palindromo!")
} else {
    alert(palavra + " não é um palindromo\n\n" + palavra + " !== " + palavrainvertida)
}