let option = ""

function base(){
    return prompt("Digite o valor da base: ")
}

function altura(){
    return prompt("Digite o valor da altura: ")
}

function lado(){
    return prompt("Digite o valor do lado: ")
}

function baseMaior(){
    return prompt("Digite o valor da base maior: ")
}

function baseMenor(){
    return prompt("Digite o valor da base menor: ")
}

function raio(){
    return prompt("Digite o valor do raio")
}

function areaTriangulo(base, altura){
    return (base*altura) / 2
}

function areaRetangulo(base, altura){
    return base * altura
}

function areaQuadrado (lado){
    return lado * lado
}

function areaTrapezio (baseMaior, baseMenor, altura){
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(raio){
    return 3.14 * (raio*raio)
}
do{
    option = prompt("Bem-vindo a calculadora geométrica!\n\n"+
    "Escolha a opção desejada:"+
    "\n1 - Calcular a área do triângulo"+
    "\n2 - Calcular a área do retângulo"+
    "\n3 - Calcular a área do quadrado"+
    "\n4 - Calcular a área do trapézio"+
    "\n5 - Calcular a área do círculo"+
    "\n6 - Sair")

    switch(option){
        case '1':
            let baseTriangulo = parseFloat(base())
            let alturaTriangulo = parseFloat(altura())
            alert("A Área do triângulo é: " + areaTriangulo(baseTriangulo,alturaTriangulo))
            break
        case '2':
            let baseRetangulo = parseFloat(base())
            let alturaRetangulo = parseFloat(altura())
            alert("A área do retângulo é: " + areaRetangulo(baseRetangulo, alturaRetangulo))
            break
        case '3':
            let ladoQuadrado = parseFloat(lado())
            alert("A área do quadrado é: " + areaQuadrado(ladoQuadrado))
            break
        case '4':
            let baseMa = parseFloat(baseMaior())
            let baseMe = parseFloat(baseMenor())
            let alturaTrapezio = parseFloat(altura())
            alert("A área do trapézio é: " + areaTrapezio(baseMa, baseMe, alturaTrapezio))
            break
        case '5':
            let valorRaio = parseFloat(raio())
            alert("A área do círculo é: " + areaCirculo(valorRaio))
            break
        break
        case '6':
            alert("Saindo do sistema...")
            break
        default:
            alert("Opção inválida")
    }

}while(option != '6')