/*
function somar(a,b){
    return a + b 
}

//const operacao = somar *Aqui estou dizendo que é igual a somar
//const operacao = somar() *Já aqui estou dizendo que é igual o resuldado de somar
let operacao = somar
console.log(operacao(4,5))

operacao = function(a,b){
    return a - b
}
console.log(operacao(4,5))
*/

olaMundo()
oiMundo()

function olaMundo(){
    console.log("Olá, mundo!")
}

const oiMundo = function(){
    console.log("Oi, mundo!")
}