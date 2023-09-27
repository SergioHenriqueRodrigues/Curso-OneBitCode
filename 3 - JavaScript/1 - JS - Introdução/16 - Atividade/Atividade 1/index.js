let fila = []
let opcao = ""

do {
    let pacientes = ""
    for(let i = 0; i< fila.length; i++){
        pacientes += (i + 1) + "º - " + fila[i] +"\n"
    }
    opcao = prompt("Pacientes:\n" + pacientes + "\nEcolha uma nova ação:\n1. Novo Paciente\n2. Consultar Pacientes\n3.Sair")

    switch(opcao){
        case "1":
            const novoPaciente = prompt("Qual o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const consultado = fila.shift(fila)
            alert("O paciente " + consultado + " foi removido da fila")
            break
        case "3":
            alert("Encerrando....")
            break
        default:
            alert("opção invalida")
    }
} while (opcao !== "3")