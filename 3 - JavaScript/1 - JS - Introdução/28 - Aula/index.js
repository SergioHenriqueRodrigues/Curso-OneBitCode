function calcular (a,b, operacao){
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b)
    return resultado
}

function somar (x,y){
    console.log("Realizando uma soma.")
    return x + y
}

calcular(3,4,somar)

calcular(8, 4, function(x,y){
    console.log("Realizando uma subtração.")
    return x - y
})

function exbirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"]
for(let i = 0; i - lista.length; i++){
    exbirElemento(lista[i], i, lista)
}

lista.forEach(exbirElemento)
lista.forEach(function (elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})