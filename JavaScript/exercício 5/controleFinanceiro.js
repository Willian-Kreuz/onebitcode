let money = parseFloat(prompt("Digite o valor inicial de dinheiro: "))
let options

do{
    options = prompt("Saldo: R$" + money +
    "\n\nEscolha a opção desejada: " +
    "\n1. Adicionar" +
    "\n2. Remover" +
    "\n3. Sair")

    switch(options){
        case "1":
            let add = parseFloat(prompt("Digite o valor a ser adicionado: "))
            money += add
            break
        case "2":
            let remove = parseFloat(prompt("Digite o valor a ser resgatado: "))
            money -= remove
            break
        case "3":
            alert("Saindo")
            break
        default:
            alert("Opção inválida")
    }

}while (options != "3")