const imoveis = []
let opcao = ""

do{
    opcao = prompt("Bem vindo ao Cadastro de Imóveis!\nTotal de Imóveis: " + imoveis.length + "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Lista de imóveis\n3. Sair")

    switch(opcao){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietario do imovel:")
            imovel.quartos = prompt("Informe quantos quartos tem no imovel:")
            imovel.banheiros = prompt("Informe o quantos banheiros tem no imovel:")
            imovel.garagem = prompt("O imovel tem garagem? (Sim/Não)")

            const confirmacao = confirm(
                "Salvar esse imovel?\n" +
                "\nProprietario: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem 
            )

            if(confirmacao){
                imoveis.push(imovel)
            }
        break
        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    "Imovel " + (i + 1) +
                    "\nProprietario: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui Garagem? " + imoveis[i].garagem 
                )
            }
        break
        case "3":
            alert("Encerrando o sistema...")
        break
        default:
            alert("Opção invalida")
    }
} while (opcao !== "3")