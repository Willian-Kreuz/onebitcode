let deckOfCards = ["-A\n", "-1\n", "-Q\n", "-3\n", "-10\n"]
let option

do{
    alert("Atualmente, o baralho possui as seguintes cartas: \n" + deckOfCards)
    
    option = prompt("Digite a opção desejada: \n"+
    "\n1 - Adicionar uma Carta"+
    "\n2 - Puxar uma carta"+
    "\n3 - Sair")

    switch(option){
        case "1":
            deckOfCards.push("-" + (prompt("Digite a carta que você deseja adicionar: ")) + "\n")
            break
        case "2":
            let lastLetter = deckOfCards.pop()
            alert("A carta retirada foi: " + lastLetter)
            break
        case "3":
            alert("Finalizando programa...")
            break
        default:
            alert("Opção Inválida")
    }

}while(option !== "3")

alert("Programa finalizado")