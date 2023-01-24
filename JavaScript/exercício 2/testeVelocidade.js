let firstVehicle = prompt("Digite o nome do veículo:")
let firstVelocity = parseFloat(prompt("Digite a velocidade do primeiro veículo: "))
let secondVehicle = prompt("Digite o nome do segundo carro: ")
let secondVelocity = parseFloat(prompt("Digite a velocidade do segundo veículo"))

if(firstVelocity > secondVelocity){
    alert(firstVehicle + ": " + firstVelocity + " km/h"+ 
    "\n"+ secondVehicle + ": " + secondVelocity + " km/h"+
    "\nO veículo " + firstVehicle + " é mais rápido que o " + secondVehicle)
}else{
    alert(firstVehicle + ": " + firstVelocity + " km/h"+
    "\n"+ secondVehicle + ": " + secondVelocity + " km/h"+
    "\nO veículo " + secondVehicle + " é mais rápido que o " + firstVehicle)
}