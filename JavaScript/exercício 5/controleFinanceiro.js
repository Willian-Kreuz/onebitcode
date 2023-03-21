let money = parseFloat(prompt("Digite a quantia inicial de dinheiro: "))
let option

do {
    alert("Valor atualizado em sua conta: R$ " + money.toFixed(2))
    option = prompt("\nEscolha a opção desejada: " + 
    "\n1 - Adicionar dinheiro"+
    "\n2 - Remover dinheiro"+
    "\n3 - Sair"
    )

    switch(option){
        case "1":
            money += parseFloat(prompt("Informe o valor que será adicionado: "))
            break
        case "2":
            money -= parseFloat(prompt("Digite o valor que será removido: "))
            break
        case "3":
            alert("Encerrando o sistema...")
            break
        default:
            alert("Opção Inválida!")
            break
    }       

} while (option != "3");