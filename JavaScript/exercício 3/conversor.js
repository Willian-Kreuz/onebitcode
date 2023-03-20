let number = parseFloat(prompt("Digite um valor em metros: "))
let option = prompt("Selecione a opção desejada: " +
"\nmm - milímetro" +
"\ncm - centímetro" +
"\ndm - decímetro" + 
"\ndam - decâmetro" +
"\nhm - hectômetro" +
"\nkm - quilômetro" 
)

switch(option){
    case "mm":
        number *= 1000
        break
    case "cm":
        number *= 100
        break
    case "dm":
        number *= 10
        break
    case "dam":
        number /= 10
        break
    case "hm":
        number /= 100
        break
    case "km":
        number /= 1000
        break
    default:
        alert("Opção inválida")
}

alert("Número convertido em " + option + ": " + number)