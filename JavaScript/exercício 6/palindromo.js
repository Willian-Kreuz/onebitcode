const word = prompt("Escreva uma palavra: ")
let invertedWord = ''

for(let i = word.length - 1; i >= 0; i--){ //word.length - 1 significa que irá começar da última letra da palavra
    invertedWord += word[i]
}

if(word === invertedWord){
    alert(word + " é um palíndromo!")
}else{
    alert(word + " não é um palíndromo!\n" +
    word + " !== " + invertedWord
    )
}