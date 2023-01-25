let option
do{
    option = prompt("Seja bem-vindo! Escolha a opção desejada: " +
    "\n1. Macarronada" +
    "\n2. Feijoada" +
    "\n3. Pizza" +
    "\n4. Sushi" +
    "\n5. Encerrando")
    alert("Você escolheu a opção de número " + option)
}while (option != '5')

alert("Sistema está sendo encerrado...")