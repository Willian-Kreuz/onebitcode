const attackersName = prompt("Digite o nome do primeiro personagem: ")
let attackPower = parseFloat(prompt("Digite o poder de ataque desse personagem: "))
const defendersName = prompt("Digite o nome do segundo personagem: ")
let healthPoints = parseFloat(prompt("Digite quanto de vida tem o segundo personagem: "))
let defendersPower = parseFloat(prompt("Digite o poder de defesa do segundo personagem: "))
const shield = prompt("Informe se o segundo personagem possui escudo: (s/n)")

let damage = 0
let life = healthPoints
if(attackPower > defendersPower && shield === 'n'){
    damage = attackPower - defendersPower
}else if(attackPower > defendersPower && shield === 's'){
    damage = (attackPower - defendersPower)/2
}else if(attackPower <= defendersPower){
    damage = 0
}

alert("Informações dos personagens: \n" +
"\nNome do atacante: " + attackersName +
"\nPoder de ataque: " + attackPower +
"\n\nNome do defensor: " + defendersName +
"\nVida total: " + healthPoints +
"\nPoder de defesa: " + defendersPower +
"\nPossui escudo: " + shield +
"\nDano sofrido: " + damage +
"\n\nVida atualizada após o dano: " + (life-damage))
