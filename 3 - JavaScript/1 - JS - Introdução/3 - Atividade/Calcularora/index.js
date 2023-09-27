let soma, subtracao, vezes, divisao, resto
const entrada1 = prompt("Escolha um número: ")
const entrada2 = prompt("Escolha outro número: ")

const num1 = parseFloat(entrada1)
const num2 = parseFloat(entrada2)

soma = num1 + num2
subtracao = num1 - num2
vezes = num1 * num2
divisao = num1 / num2

confirm("Soma:" + soma + "\nSubtração:" + subtracao + "  \nMultiplicação:" + vezes + "\nDivisão:" + divisao + "\nEstá Correto?")