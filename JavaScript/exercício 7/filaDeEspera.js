let paciente = []
let option, adicionar, remover
do{
    let pacientes = ""
    for(let i = 0; i < paciente.length; i++){
        pacientes += (i+1) + "º - " + paciente[i] + "\n"
    }

    option = prompt("Fila de pacientes: \n" + pacientes+ "\n\nEscolha a opção desejada: " + 
    "\n1 - Novo paciente" +
    "\n2 - Consultar paciente" +
    "\n3 - Sair")
    switch(option){
        case "1":
            adicionar += paciente.push(prompt("Digite o nome do paciente: "))
            break
        case "2":
            remover = paciente.shift()
            alert("Próximo paciente: " + remover)
            break
        case "3":
            alert("Saindo")
            break
        default:
            alert("Opção inválida")
    }

}while(option != 3)