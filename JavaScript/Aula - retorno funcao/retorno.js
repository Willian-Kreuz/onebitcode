function calcularMedia(a,b){
    const media = (a+b)/2
    return media
}

const resultado = calcularMedia(6,2)

console.log(resultado)

function criarProduto(nome, preco){
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("Notebook", 2300)

console.log(notebook)