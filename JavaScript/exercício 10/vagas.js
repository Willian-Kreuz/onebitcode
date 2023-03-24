function listarVagas(indice, nome, quantidadeCandidatos){
    alert(indice, nome, quantidadeCandidatos)
}

function criarVaga(){
    const vaga = []
    const criandoVaga = {}
    criandoVaga.nome = prompt("Digite um novo para a vaga: ")
    criandoVaga.descricao = prompt("Digite a descrição da vaga: ")
    criandoVaga.data = prompt("Digite a data limite para a vaga: ")

    const confirmacao = confirm("Você deseja salvar essa vaga: \n"+
    "\nNome da vaga: " + criandoVaga.nome +
    "\nDescrição da vaga: " + criandoVaga.descricao +
    "\nData limite: " + criandoVaga.data)

    if(confirmacao === true){
        vaga.push(criandoVaga)
        alert("Vaga cadastrada com sucesso")
    }else{
        alert("Voltando para o menu")
    }
}


function executar(){
    let option = ''

    do{
        option = prompt("Bem vindo ao cadastro de vagas!\n\n Selecione a opção desejada: " + 
        "\n1- Listar vagas disponíveis"+
        "\n2- Criar uma nova vaga"+
        "\n3- Visualizar uma vaga"+
        "\n4- Inscrever um candidato em uma vaga"+
        "\n5- Excluir uma vaga"+
        "\n6- Sair.")

        switch(option){
            case '1':
                variavelAqui.forEach(listarVagas) // preciso passar uma variável aqui
                break
            case '2':
                criarVaga()
                break
            case '3':
                break
            case '4':
                break
            case '5':
                break
            case '6':
                alert("Saindo do sistema")
                break
            default:
                alert("Opção inválida")
        }



    }while(option != '6')
}

executar()