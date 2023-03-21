let number = parseFloat(prompt("Digite um valor para calcularmos a tabuada: "))
let tabuada = ""

for(let i = 0 ; i <= 20 ; i++){
    tabuada += "\n- " + number + " x " + i + " = " + (number * i)
}

alert("Resultado tabuada: \n"+
tabuada
)
