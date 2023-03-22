let baralho = []
let option = ""

do{
    
    option = prompt("Quantidade de cartas: " + baralho.length + "\n\nEscolha uma opção: "+
    "\n1 - Adicionar uma carta"+
    "\n2 - Remover uma carta"+
    "\n3 - Sair")

    switch(option){
        case '1':
            baralho.push(prompt("Digite o nome da carta: "))
            break
        case '2':
            let remove = baralho.pop()
            if(!remove){
                alert("Não há nenhuma carta no baralho!")
            }else{
                alert("A carta puxada foi: " + remove)
            }
            break
        case '3':
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida")

    }

}while(option != 3)