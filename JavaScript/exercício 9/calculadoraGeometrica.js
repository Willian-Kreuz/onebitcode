let option = ""

function triangulo(base,altura){
    const areaTriangulo = (base*altura) / 2
    return areaTriangulo
}

function retangulo(base,altura){
    const areaRetangulo = base*altura
    return areaRetangulo
}

do{
    option = prompt("Bem-vindo a calculadora geométrica! \n" +
    "\nEscolha a opção desejada: "+
    "\n1 - Calcular a área do triângulo"+
    "\n2 - Calcular a área do retângulo"+
    "\n3 - Calcular a área do quadrado"+
    "\n4 - Calcular a área do trapézio"+
    "\n5 - Calcular a área do círculo"+
    "\n6 - Sair")

    switch(option){
        case "1":
            let baseTriangulo = parseFloat(prompt("Digite a base do triângulo: "))
            let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo: "))
            alert("A área do triângulo é: " + triangulo(baseTriangulo,alturaTriangulo))
            break
        case "2":
            let baseRetangulo = parseFloat(prompt("Digite a base do retângulo: "))
            let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo: "))
            alert("A área do retângulo é: " + retangulo(baseRetangulo,alturaRetangulo))
            break
        case "3":
        case "4":
        case "5":
        case "6":
            alert("Saindo do sistema...")
            break
    }
}while (option != "6")