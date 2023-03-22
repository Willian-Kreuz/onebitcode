let imovel = []
let option = ""

do{
    option = prompt("Quantidade de imóveis cadastrados: " + imovel.length + 
    "\n\nDigite a opção desejada: " +
    "\n1 - Adicionar imóvel"+
    "\n2 - Mostrar imóvel"+
    "\n3 - Sair")

    switch(option){
        case '1':
            const imoveis = {}
            imoveis.proprietario = prompt("Nome do proprietário: ")
            imoveis.quartos = prompt("Quantidade de quartos: ")
            imoveis.banheiros = prompt("Quantidade de banheiros: ")
            imoveis.garagem = prompt("Possui garagem? sim/não")

            const confirmacao = confirm("Você confirma as informações abaixo? \n" + 
            "\nProprietário: " + imoveis.proprietario +
            "\nQuartos: " + imoveis.quartos+
            "\nBanheiros: " + imoveis.banheiros+
            "\nGaragem: " + imoveis.garagem)

            if(confirmacao === true){
                imovel.push(imoveis)
                alert("Cadastro salvo com sucesso")
            }else{
                alert("Voltando para o menu")
            }
            break
        case '2':
            for(let i = 0; i < imovel.length; i++){
                alert("Imóvel nº " + (i+1) +
                "\nProprietário: " + imovel[i].proprietario+
                "\nQuantidade de quartos: " + imovel[i].quartos+
                "\nProprietário: " + imovel[i].banheiros+
                "\nProprietário: " + imovel[i].garagem)
            }
            break
        case '3':
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }

}while(option != '3')