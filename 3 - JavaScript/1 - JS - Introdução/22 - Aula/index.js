function calcularMedia(a,b){
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7,2)

console.log(resultado)

function criarProduto(nome, preco){
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}


console.log(criarProduto("Notebook I3 101000F 8b", 2500))

function areaRetangular(base, altura){
    const area = base * altura
    return area
}

function areaQuadrada(lado, altura){
    return areaRetangular(lado, lado)
}

console.log(areaRetangular(3, 5))
console.log(areaQuadrada(9))

function ola(){
    let texto = "..."
    texto = "Olá mundo!"
    return texto
    console.log(texto)
}
console.log(ola())

function maioridade(idade){
    if(idade >= 18){
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
console.log(maioridade(20))
console.log(maioridade(13))