const valorMetro = parseFloat(prompt("Digite um valor em metros: "))

const unidadeDeMedida = prompt("Selecione a unidade de medida para qual deseja converter:" +
"\n1. mm (Milímetro)" +
"\n2. cm (Centímetro)" +
"\n3. dm (Decímetro)" +
"\n4. dam (Decâmetro)" +
"\n5. hm (Hectometro)" +
"\n6. km (Quilômetro)"
)

switch(unidadeDeMedida){
    case "1":
        alert("Resultado: " + unidadeDeMedida + "m = " + unidadeDeMedida * 1000 + "mm")
        break
    case "2":
        alert("Resultado: " + unidadeDeMedida + "m = " + unidadeDeMedida * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + unidadeDeMedida + "m = " + unidadeDeMedida *10 + "dm")
        break
    case "4":
        alert("Resultado: " + unidadeDeMedida + "m = " + unidadeDeMedida / 10 + "dam")
        break
    case "5":
        alert("Resultado: " + unidadeDeMedida + "m = " + unidadeDeMedida / 100 + "hm")
        break
    case "6":
        alert("Resultado: " + unidadeDeMedida + "m = " + unidadeDeMedida / 1000 + "km")
        break
    default:
        alert("Opção não encontrada")
}
