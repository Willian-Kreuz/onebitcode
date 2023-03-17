let option = ""

function triangulo(base,altura){
    const areaTriangulo = (base*altura) / 2
    return areaTriangulo
}

function retangulo(base,altura){
    const areaRetangulo = base*altura
    return areaRetangulo
}

function quadrado(lado){
    const areaQuadrado = lado*lado
    return areaQuadrado
}

function trapezio(baseMaior,baseMenor,altura){
    const areaTrapezio = (baseMaior + baseMenor) * (altura/2)
    return areaTrapezio
}

function circulo(raio){
    const areaCirculo = 3.14 * (raio*raio)
    return areaCirculo
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
            let ladoQuadrado = parseFloat(prompt("Digite o lado do quadrado: "))
            alert("A área do quadrado é: " + quadrado(ladoQuadrado))
            break
        case "4":
            let baseMaiorTrapezio = parseFloat(prompt("Digite a base maior do trapezio: "))
            let baseMenorTrazpezio = parseFloat(prompt("Digite a base menor do trapezio: "))
            let alturaTrapezio = parseFloat(prompt("Digite a altura do trapézio: "))
            alert("A área do trapézio é: " + trapezio(baseMaiorTrapezio, baseMenorTrazpezio,alturaTrapezio))
            break
        case "5":
            let raioCirculo = parseFloat(prompt("Digite o raio do círculo: "))
            alert("A área do círculo é: " + circulo(raioCirculo))
            break
        case "6":
            alert("Saindo do sistema...")
            break
    }
}while (option != "6")