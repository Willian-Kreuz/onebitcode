let nome = prompt("Digite o seu nome")
let sobrenome = prompt("Digite o seu sobrenome")
let campoEstudo = prompt("Digite o Campo de Estudos")
let anoNascimento = prompt("Digite o ano de nascimento")

alert(
    "Recruta cadastrado com sucesso!\n" + 
    "\nNome Completo: " + nome + " " + sobrenome + 
    "\nCampo de Estudo: " + campoEstudo +
    "\nIdade: " + (2022 - anoNascimento)
)
