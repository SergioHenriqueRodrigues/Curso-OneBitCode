let poupanca = parseFloat(prompt("Quanto de dinheiro tem na conta?"))
let entrar = prompt("Deseja entrar na conta? (Sim/Não)")

while(entrar === "Sim"){
    tranferencia = prompt("Você tem " + poupanca + "R$ na poupança\nA) Desejo remover uma quantia\nB) Desejo adicionar uma quantia\nC)Sair")
    
    switch(tranferencia){
        case "A":
            let adicao = parseFloat(prompt("Deseja adicionar quanto?"))
            poupanca = poupanca + adicao
            alert("Você tem " + poupanca + "R$ na sua conta")
            break
        case "B":
            let sub = parseFloat(prompt("Desaja retirar quanto da sua conta?"))
            poupanca = poupanca - sub
            alert("Você tem " + poupanca + "R$ na sua conta")
            break
        case "C":
            alert("Você saiu...")
            entrar += "Não"
            break
        default:
            alert("Opção invalida...")
    }
}