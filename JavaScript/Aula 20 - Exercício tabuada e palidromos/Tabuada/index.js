const number = parseFloat(prompt("Digite um número: "))

let tabuada = ""

for(let calculo = 0; calculo <=20; calculo++){
    tabuada += " -> " + number + " x " + calculo + " = " + (number*calculo + "\n")
}

alert(tabuada)
