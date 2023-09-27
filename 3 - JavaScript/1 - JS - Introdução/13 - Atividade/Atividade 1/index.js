const escolha = prompt("Escolha um numero para fazer o calculo: ")
let resultado = ""
for(let i = 0; i <= 20; i++){
    resultado += " -> " + escolha + " * " + i + " = " + (escolha * i) + "\n"
}

alert("Resultado da tabuada de " + escolha + ":\n\n" + resultado)