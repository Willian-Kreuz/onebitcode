const firstVehicle = prompt("Digite o nome do primeiro veículo:")
let firstVelocity = parseFloat(prompt("Digite a velocidade do seu veículo:"))

const secondVehicle = prompt("Digite o nome do segundo veículo:")
let secondVelocity = parseFloat(prompt("Digite a velocidade do seu veículo:"))

if (firstVelocity > secondVelocity){
    alert(
        "O " + firstVehicle + " é o mais rápido, atingindo a velocidade de " + firstVelocity + "KM/H"
    )
} else if ( firstVelocity < secondVelocity){
    alert(
        "O " + secondVehicle + " é o mais rápido, atingindo a velocidade de " + secondVelocity + "KM/H"
    )
}else {
alert ("O veículo " + firstVehicle + " e o veículo " + secondVehicle + " possuem a mesma velocidade.")}