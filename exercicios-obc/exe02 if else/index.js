const nome1 = prompt("Digite o nome do primeiro personagem:")
const atackum = prompt("Qual o poder de attack desse personagem:")
const atack1 = parseFloat(atackum)

const nome2 = prompt("Qual o nome do segundo personagem:")
let vida = prompt("digite o quanto de HP o segundo personagem tera:")
let hp = parseFloat(vida)
const poderDefesa = prompt("Qual o poder de defesa do personagem:")
const defesa = parseFloat(poderDefesa)
const escudo = prompt("O segundo personagem possui escudo, sim ou não?")

let danoCausado = 0

if (atack1 > defesa && escudo === "não") {
    danoCausado = atack1 - defesa
} else if (atack1 > defesa && escudo === "sim") {
    danoCausado = (atack1 - defesa) / 2
}

vida -= danoCausado

alert(nome1 + " causou " + danoCausado + " pontos de dano em " + nome2)
alert(
    nome1 + "\nPoder de attack: " + atack1 + "\n\n" + 
    nome2 + "\nPontos de vida:" + hp + 
    "\nPoder de defesa: " + defesa + "\nPossuí escudo: " + escudo
)