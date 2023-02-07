const imoveis = []
let opcao = ""

do{
    opcao = prompt("Seja bem-vindo ao cadastro de imóveis!"+
    "\nTotal imóveis: " + imoveis.length +
    "\n\nEscolha uma opção: \n1. Novo imóvel\n2. Lista imóveis\n3. Sair")

    switch(opcao){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietário: ")
            imovel.quartos = prompt("Informe a quantidade de quartos: ")
            imovel.banheiros = prompt("Quantos banheiros o imóvel possui?")
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n"+
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem: " + imovel.garagem
            )

            if(confirmacao){
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            }else{
                alert("Voltando ao menu")
            }
            break
        case "2":
            for(let i = 0; i < imoveis.length ; i++){
                alert(
                    "Imóvel " + (i+1)+
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nGaragem: " + imoveis[i].garagem
                    )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }

}while (opcao !== "3")