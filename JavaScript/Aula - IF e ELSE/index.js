const idade = prompt("Digite a sua idade: ")

if(idade >= 18){
    alert("Você é maior de idade")
}else if (idade < 18 && idade >= 12){
    alert("Você é menor de idade")
}else if(idade < 12 && idade >= 4){
    alert("Você é criança")
}else{
    alert("Você é nenem")
}