const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
//Adicionar Elementos no final--> Push
arr.push("Bormir")

console.log(arr)

// Adicionar elementos no começo --> unshift
arr.unshift("Arnaldo")

console.log(arr)

//remover elemento no final --> pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//remover elemento no começo --> shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Pesquisar se existe um determinado elemento no array --> includes
const inclui =   arr.includes("Gandalf")
console.log(inclui)

//descobrir qual indice da palavra --> indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Dividir e concatenar arrays
//slice
const hobbits = arr.slice(0,4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)
//concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//Substituição dos elementos --> splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os elementos
for(let indice = 0; indice < sociedade.length; indice++ ){
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}