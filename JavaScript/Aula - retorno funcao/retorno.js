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

function areaRetangular(base,altura){
    return base*altura
}

function areaQuadrado(lado){
    return areaRetangular(lado, lado)
}

console.log(areaRetangular(3,5))
console.log(areaQuadrado(9))

function maioridade (idade){
    if (idade >= 18){
        return "Maior de idade"
    }else{
        return "Menor de idade"
    }
}

console.log(maioridade(35))
console.log(maioridade(15))