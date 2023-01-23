let name = prompt("Digite o nome do recruta: ")
let lastName = prompt("Digite o sobrenome do recruta: ")
let study = prompt("Digite o campo de estudo: ")
let yearsOld = parseFloat(prompt("Digite o ano que o recruta nasceu: "))

let years = 2023 - yearsOld

alert("Seja bem-vindo, " + name + " " + lastName + "\nO campo de estudo escolhido foi: " + study + "\n Atualmente você possui " + years + " anos de idade.")

