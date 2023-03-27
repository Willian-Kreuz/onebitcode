const vaga = []

function listarVagas(){
    const vagasEmTexto = vaga.reduce(function (textoFinal, vaga, indice){
       textoFinal += indice + ". " 
       textoFinal += vaga.nome
       textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
       return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function criarVaga(){
    const nome = prompt("Digite um novo para a vaga: ")
    const descricao = prompt("Digite a descrição da vaga: ")
    const dataLimite = prompt("Digite a data limite para a vaga: ")

    const confirmacao = confirm("Você deseja salvar essa vaga? \n"+
    "\nNome da vaga: " + nome +
    "\nDescrição da vaga: " + descricao +
    "\nData limite: " + dataLimite)

    if(confirmacao === true){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vaga.push(novaVaga)
        alert("Vaga cadastrada com sucesso")
    }else{
        alert("Voltando para o menu")
    }
}

function mostrarVaga(){
    const indice = prompt("Digite o índice da vaga desejada: ")
    const vagas = vaga[indice]
    
    const candidatosEmTexto = vagas.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert("Vaga nº " + indice + 
    "\nNome: " + vagas.nome +
    "\nDescrição: " + vagas.descricao +
    "\nData limite: "+ vaga.dataLimite +
    "\nQuantidade de candidatos: " + vagas.candidatos.length +
    "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato(){
    const candidato = prompt("Informe o nome do candidato: ")
    const indice = prompt("Informe o índice da vaga para qual o candidato deseja se inscrever: ")
    const vagas = vaga[indice]

    const confirmacao = confirm("Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n"+
    "Nome: " + vagas.nome + 
    "\nDescrição:  " + vagas.descricao +
    "\nData Limite: " + vagas.dataLimite)

    if(confirmacao){
        vagas.candidatos.push(candidato)
        alert("Inscrição realizada com sucesso")
    }
}

function excluirVaga(){
    const indice = prompt("Informe o índice da vaga que deseja excluir: ")
    const vagas = vaga[indice]

    const confirmacao = confirm("Tem certeza que deseja excluir a vaga " + indice + 
    "Nome: " + vagas.nome + 
    "\nDescrição:  " + vagas.descricao +
    "\nData Limite: " + vagas.dataLimite
    )

    if(confirmacao){
        vaga.splice(indice, 1)
        alert("Vaga excluída")
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
                listarVagas()
                break
            case '2':
                criarVaga()
                break
            case '3':
                mostrarVaga()
                break
            case '4':
                inscreverCandidato()
                break
            case '5':
                excluirVaga()
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