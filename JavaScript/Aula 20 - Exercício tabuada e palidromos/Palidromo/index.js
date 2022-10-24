const word = prompt("Informe uma palavra:")
let invertedWord = ""

for( let indice = word.length - 1; indice >= 0; indice--){
    invertedWord += word[indice]
}

if(word === invertedWord){
    alert(word + " é um palíndromo!")
} else{
    alert(
        word + " Não é uma palíndromo! \n\n" + 
        word + " !== " + invertedWord
        )
}