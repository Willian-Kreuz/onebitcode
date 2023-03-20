let value = parseFloat(prompt("Digite um valor em metros: "))
const option = prompt("Escolha uma opção: " +
"\nmm - milímetro(mm)" +
"\ncm - centímetro(cm)" +
"\ndm - decímetro(dm)" +
"\ndam - decâmetro(dam)" +
"\nhm - hectômetro(hm)" + 
"\nkm - quilômetro(km)"
)

switch(option){
    case "mm":
        value *=1000
        break
    case "cm":
        value *=100
        break
    case "dm":
        value *=10
        break
    case "dam":
        value /= 10
        break
    case "hm":
        value /= 100
        break
    case "km":
        value /= 1000
        break
    default:
        alert("Opção inválida")
}

alert("Valor em " + option + ": " + value)