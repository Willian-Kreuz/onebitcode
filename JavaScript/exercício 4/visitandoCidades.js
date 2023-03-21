const name = prompt("Olá turista, digite o seu nome: ")
let cities = prompt("Você visitou alguma cidade? (sim/não)")

let nameCities = ""
let quantidade = 0

while(cities === "sim"){
    let cidades = prompt("Digite o nome da cidade visitada: ")
    nameCities += "\n- " + cidades
    quantidade ++
    cities = prompt("Você visitou mais alguma cidade? ")
}

alert("Olá " + name + "!" +
"\n\n Você visitou um total de " + quantidade + " cidades" +
"\n As cidades visitadas foram: " + nameCities
)