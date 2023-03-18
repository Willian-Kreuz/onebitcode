const attackPerson = prompt("Digite o nome do personagem de ataque: ")
const powerAttack = parseFloat(prompt("Digite o poder de ataque: "))
const defensePerson = prompt("Digite o nome do defensor: ")
let life = parseFloat(prompt("Digite os pontos de vida do defensor: "))
let powerDefense = parseFloat(prompt("Digite o poder de defesa do persongaem: "))
const shield = prompt("O personagem possui escudo (s/n)?")

let demage = 0

if(powerAttack > powerDefense && shield === 'n'){
    demage = powerAttack - powerDefense
}else if (powerAttack > powerDefense && shield === 's'){
    demage = (powerAttack - powerDefense) / 2
}else{
    demage = 0
}

alert("Informações dos personagens: \n" + 
"\nAtacante: " + attackPerson +
"\nPoder de ataque: " + powerAttack +
"\n\nDefensor: " + defensePerson +
"\nVida: " + life +
"\nPoder de defesa: " + powerDefense +
"\nEscudo: " + shield +
"\nVida do defensor após o ataque: " + (life-demage))