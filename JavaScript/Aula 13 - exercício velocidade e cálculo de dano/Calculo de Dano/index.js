const firtsNameCharacter = prompt("Digite o nome do personagem:")
const attackPower = parseFloat(prompt("Digite o poder de ataque do seu personagem: "))

const secondNameCharacter = prompt("Digite o nome do segundo personagem:")
let healthPoints = parseFloat(prompt("Digite os pontos de vida de seu personagem:"))
const defensePower = parseFloat(prompt("Digite o poder de defesa do seu personagem: "))
const shield = prompt ("Ele possui um escudo? (Sim/Não)")

let damageDone = 0

if (attackPower > defensePower && shield === "Não"){
    damageDone = attackPower - defensePower
}else if (attackPower > defensePower && shield === "Sim"){
    damageDone = (attackPower - defensePower) / 2
}else (attackPower <= defensePower)
    damageDone

healthPoints -= damageDone

alert(firtsNameCharacter + " causou " + damageDone + " pontos de dano em " + secondNameCharacter)
alert(
    firtsNameCharacter + "\nPoder de ataque: " + attackPower + "\n\n" +
    secondNameCharacter + "\nPontos de vida: " + healthPoints +
    "\nPoder de defesa: " + defensePower + "\nPossui Escudo: " + shield
)



