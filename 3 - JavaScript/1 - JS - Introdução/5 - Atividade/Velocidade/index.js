const car1 = parseFloat(prompt("Digite a velocidade do carro 1: "))
const car2 = parseFloat(prompt("Digite a velocidade do carro 2: "))

if(car1 > car2){
    alert("O carro 1 é mais veloz que o carro 2!")
} else if (car1 < car2) {
    alert("O carro 2 é mais veloz que o carro 1!")
} else{
    alert("Os carros possuem a mesma velocidade!")
}
