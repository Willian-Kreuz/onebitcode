const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf"]
console.log(arr)

//Adicionar elementos no final - push
arr.push("Boromir")
console.log(arr)

//Adicionar elementos no início - unshift
arr.unshift("GOD")
console.log(arr)

//Remover elemento no final - pop
let ultimo = arr.pop()
console.log(arr)
console.log(ultimo)

//Remover elemento no início - shift
let primeiro = arr.shift()
console.log(arr)
console.log(primeiro)

//Pesquisar se um elemento existe - includes
//Retorna True or False
let inclui = arr.includes("Gandalf")
console.log(inclui)

//Pesquisar em qual posição o elemento se encontra - indexOf
let posicao = arr.indexOf("Gandalf")
console.log(posicao)

//Cortar arrays - slice
// É possível referenciar de trás para frente utilizando número negativo (Ex.: -3)
let corte = arr.slice(0,3)
console.log(arr)
console.log(corte)

//Concatenar - concat
let concatenar = corte.concat(arr, "Boromir", "Gandalf, o cinzento")
console.log(concatenar)

//Substituir elementos - splice
let substituir = concatenar.splice(posicao, 1, "Boromiro", false, true, 1, 3)
console.log(concatenar)
console.log(substituir)

//Iterar sobre Elementos
for(let i = 0; i < concatenar.length; i++){
    let element = concatenar[i]
    console.log(element + " se encontra na posição "+ i)
}