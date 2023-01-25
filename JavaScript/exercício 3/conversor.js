let value = parseFloat(prompt("Digite um valor em metros: "))
let option = prompt("Digite a unidade de medida que desejas: \n" +
"\nmm - milímetro"+
"\ncm - centímetro"+
"\ndm - decímetro"+
"\ndam - decâmetro"+
"\nhm - hectômetro"+
"\nkm - quilômetro")

switch(option){
    case 'mm':
        value *= 1000
        break
    case 'cm':
        value *= 100
        break
    case 'dm':
        value *= 10
        break
    case 'dam':
        value /= 10
        break
    case 'hm':
        value /= 100
        break
    case 'km':
        value /=1000
        break
    default:
        alert("Operação não encontrada")
}

alert("Valor convertido em "+ option + " = " + value)
