const atacante = prompt("Digite o Nome do Personagem: ")
const poderDeAtaque = parseFloat(prompt("Digte o Poder de ataque do seu poder: "))

const defensor = prompt("Qual o nome do Personagem deffensor? ")
let posntosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = prompt("Qual seu poder de defesa?")
const possuiEscudo = prompt("Ele Possui um escudo? (Sim/Não)")

let danoCausado = 0

if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Não"){
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

alert(atacante + " causou " + danoCausado + " Pontos de dano em " + defensor)
alert(atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n"+ defensor + "\nPontos de vida " + posntosDeVida + "Poder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo)