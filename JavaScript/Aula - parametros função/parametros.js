function dobro (x){
    alert("O dobro de " + x + " é " + (x * 2))
}

//dobro(5)

function dizerOla(name = "mundo"){
    alert("Olá, " + name + "!")
}

//dizerOla("Willian")
//dizerOla()

function soma(a,b){
    alert("O resultado da soma é: " + (a+b))
}

//soma(3,5)
//soma(5,1)

function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome, // isso é igual a nome: nome
        email, // isso é igual a email: email
        senha, // isso é igual a senha: senha
        tipo // isso é igual a tipo: tipo
    }
    console.log(usuario)
}

//criarUsuario("Willian", "willian@email.com", "1234")

function muitosParametros(nome, telefone, endereco){
    //...
}

function poucosParametros(usuario){
    usuario.nome
    usuario.email
    usuario.endereco

}

const dadosUsuario ={
    nome: "Alemao",
    email: "1",
    endereco: "3",
}

poucosParametros(dadosUsuario)