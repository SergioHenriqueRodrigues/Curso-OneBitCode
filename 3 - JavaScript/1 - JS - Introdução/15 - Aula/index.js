const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar Elementos
//Push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//Unshift
tamanho = arr.unshift("teste")
console.log(arr)
console.log(tamanho)

//Remover Elementso
//POP
const ultimoELemento = arr.pop()
console.log(arr)
console.log(ultimoELemento)

//shift
const primeiroELemento = arr.shift()
console.log(arr)
console.log(primeiroELemento)

//Pesquisar por um elemento
//Includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

//IndexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar e Concatenar
//Slice
const hobbit = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(hobbit)
console.log(outros)
console.log(arr)

//Concat
const socidade = hobbit.concat(outros, "Boromir")
console.log(socidade)

//Substituição dos Elementos
//Splice
const elementosRemovidos = socidade.splice(indice, 1, "Gandalf, O Cinzento");
console.log(socidade)
console.log(elementosRemovidos)

//Iterar sobre os Elementos
for (let indice = 0; indice < socidade.length; indice++){
    const elemento = socidade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}