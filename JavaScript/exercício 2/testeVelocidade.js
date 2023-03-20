const vehicleOne = prompt("Digite o nome do primeiro veículo: ")
const velocityOne = parseFloat(prompt("Digite a velocidade do primeiro veículo: "))
const vehicleTwo = prompt("Digite o nome do segundo veículo: ")
const velocityTwo = parseFloat(prompt("Digite a velocidade do segundo veículo: "))

if( velocityOne > velocityTwo){
    alert("O veículo " + vehicleOne + " é mais rápido que o " + vehicleTwo)
}else if (velocityOne < vehicleTwo){
    alert("O veículo " + vehicleTwo + " é mais rápido que o " + vehicleOne)
}else{
    alert("Os dois veículos possuem a mesma velocidade")
}