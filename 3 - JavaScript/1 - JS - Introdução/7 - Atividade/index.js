let escolhaMetro = prompt("Digite um valor em Metros:")
const unidadeMedida = prompt("Escolha uma unidade de medida para converter:\n\na) mm\nb) cm\nc) dm\nd) dam\ne) hm\nf) km")

switch (unidadeMedida){
    case 'a':
        escolhaMetro = escolhaMetro * 1000
        alert("O calculo dá " + escolhaMetro)
        break
    case 'b':
        escolhaMetro = escolhaMetro * 100
        alert("O calculo dá " + escolhaMetro)
        break
    case 'c':
        escolhaMetro = escolhaMetro * 10
        alert("O calculo dá " + escolhaMetro)
        break
    case 'd':
        escolhaMetro = escolhaMetro / 100
        alert("O calculo dá " + escolhaMetro)
        break
    case 'e':
        escolhaMetro = escolhaMetro / 100
        alert("O calculo dá " + escolhaMetro)
        break
    case 'f':
        escolhaMetro = escolhaMetro / 1000
        alert("O calculo dá " + escolhaMetro)
        break
    default:
        alert("Opção invalida!1")
}