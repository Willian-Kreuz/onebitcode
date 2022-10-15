let dinheiro = parseFloat(prompt("Qual a quantidade inicial de dinheiro que você possui disponível?"))

let opcao = ""

do{
    opcao = prompt("Quantidade inicial: R$" + dinheiro +
    "\n\n1.Adicionar dinheiro" + 
    "\n2.Remover dinheiro" +
    "\n3.Sair")
    switch(opcao){
        case "1":
            dinheiro += parseFloat(prompt("Digite o valor a ser adicionado: "))
            break
        case "2":
            dinheiro -= parseFloat(prompt("Digite o valor a ser retirado: "))
            break
        case "3":
            alert("Encerrando")
            break
        default:
            alert("Entrada inválida")
    } 
    
} while (opcao !== "3")