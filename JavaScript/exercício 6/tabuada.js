let number = parseFloat(prompt("Digite o número na qual faremos a tabuada: "))
let result = ''
for(let i = 0; i <= 20 ; i++){
    let multiplication = i * number
    result += (number + " x " + i + " = " + multiplication + "\n" )
}

alert(result)