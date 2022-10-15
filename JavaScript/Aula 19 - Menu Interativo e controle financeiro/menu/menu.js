let menu = ""
do{
    menu = prompt(
    "Escolha a opção do menu do dia: "+
    "\n1.Arroz com bife" + 
    "\n2.Macarronada" +
    "\n3.Salmão" +
    "\n4.Feijoada" +
    "\n5.Encerrar"
    ) 
    alert("A opção escolhida foi: " + menu)
} while( menu != "Encerrar" )

alert("O sistema está sendo encerrado.")