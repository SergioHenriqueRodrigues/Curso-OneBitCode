function calcTriangulo(){
    const base = prompt("Informe a base do triangulo: ")
    const altura = prompt("Informe a altura do triangulo: ")
    return base * altura / 2
}
function calcRetangulo(){
    const base = prompt("Informe a base do Retangulo: ")
    const altura = prompt("Informe a altura do Retangulo: ")
    return base * altura 
}
function calcQuadrado(){
    const lado = prompt("Informe o lado do Quadrado: ")
    return lado * lado 
}
function calcTrapezio(){
    const baseMaior = parseFloat(prompt("Informe a base maior do Trapezio: "))
    const baseMenor = parseFloat(prompt("Informe a base menor do Trapezio: "))
    const altura = parseFloat(prompt("Informe a altura do Trapezio: "))
    return (baseMaior + baseMenor) * altura / 2
}
function calcCirculo(){
    const raio = prompt("Informe o raio do Circulo: ")
    return (3.14 * raio * raio)
}
function menu(){
    return prompt(
        "Calculadora Geometrica:\n\n1. Área do triângulo\n2. Área  do retangulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do circulo\n6. Sair"
    )
}

function executar(){
    let opcao = ""
    do{
        opcao = menu()
        let resultado

        switch(opcao){
        case "1":
            resultado = calcTriangulo()
            break
        case "2":
            resultado = calcRetangulo()
            break
        case "3":
            resultado = calcQuadrado()
            break
        case "4":
            resultado = calcTrapezio()
            break
        case "5":
            resultado = calcCirculo()
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção invalida")
        }

        if (resultado){
            alert("Resultado: " + resultado)
        }
    }while(opcao !== "6")
}
executar()