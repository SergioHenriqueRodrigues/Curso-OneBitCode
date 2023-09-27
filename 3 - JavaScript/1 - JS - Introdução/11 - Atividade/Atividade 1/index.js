let entrar = prompt("Entrar no menu? (Sim/Não)")

while(entrar === "Sim"){
    let resposta = prompt("Olá, Bem vindo ao Bistro Chez Remy!" + 
    "\nA) Entrada\nB) Prato Principal\nC) Sobremesa\nD) Bebidas\nE) Sair do menu")
    switch(resposta){
        case "A":
            alert("Você escolheu a Opção A) Entrada")
            break
        case "B":
            alert("Você escolheu a Opção B) Prato Principal")
            break
        case "C":
            alert("Você escolheu a Opção C) Sobremesa")
            break
        case "D":
            alert("Você escolheu a Opção D) Bebidas")
            break
        case "E":
            alert("Você escolheu a Opção E) Sair do menu, Volte sempre!")
            entrar += "Nâo"
            break
        default:
            alert("Opção invalida")
    }

}