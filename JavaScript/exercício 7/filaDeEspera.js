let pacient = ["Robert", "Roman", "Elizabeth", "Escobar"]
let option

do{
    option = prompt("Digite a opção desejada: \n"+
    "\n1- Novo paciente" +
    "\n2- Consultar Paciente" +
    "\n3- Sair")

    switch(option){
        case "1":
            pacient.push(prompt("Digite o nome do paciente: "))
            break
        case "2":
            let first = pacient.shift()
            alert("O próximo paciente é: "+ first)
            break
        case "3":
            alert("Saindo so sistema...")
            break
        default:
            alert("Opção não encontrada")
    }
}while (option != "3")

alert("Programa finalizado.")