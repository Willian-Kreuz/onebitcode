function addInput() {
  const ul = document.getElementById("inputs"); //Estou pegando o UL que possui o id 'inputs'.

  const newLi = document.createElement("li"); //para criar um li dentro da UL. "LI" é a linha que será criada
  newLi.className = "list-item"; //o li criado terá uma class chamada "list-item"
  newLi.innerText = "Novo input: "; //o texto que aparecerá na frente do LI é o 'Novo Input'

  const newInput = document.createElement("input"); //Cria elemento do tipo input
  newInput.type = "text"; // o tipo do input é de dexto
  newInput.name = "input"; //o nome do input é input

  newLi.appendChild(newInput); //appendChild serve para "amarrar" os nós. Nesse caso, o newInput ficará dentro do newLi
  ul.appendChild(newLi); //Nesse caso, o newLi ficará dentro da ul
}
