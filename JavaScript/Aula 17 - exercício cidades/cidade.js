const turist = prompt("Digite o seu nome:")
let cities = ""
let numbers = 0
let contagem = prompt("Você visitou alguma cidade? (Sim/Não)")

while (contagem === "Sim"){
    let city =  prompt("Qual é o nome da cidade visitada?")
    cities += " - " + city + "\n"
    numbers++
    contagem = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista: " + turist +
    "\nQuantidade de cidades visitadas: " + numbers +
    "\nCidades visitadas: \n" + cities
)