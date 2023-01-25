const name = prompt("Seja bem-vindo! \nDigite o seu nome: ")
let city = prompt("Você já visitou alguma cidade? (s/n)")

let cities = ''

while (city === 's'){
    cities += prompt("Digite o nome da cidade visitada: ") + "\n"
    city = prompt(name + ", você visitou alguma outra cidade? (s/n)") 
}

alert("As cidades visitadas foram: \n\n" + cities )