function adicionar() {
  const ul = document.getElementById("Adicionando");

  const newLi = document.createElement("li");
  newLi.className = "adicionei";
  newLi.innerText = "Adicionar";

  const newInput = document.createElement("input");
  newInput.name = "adicionação";
  newInput.type = "text";

  newLi.appendChild(newInput);
  ul.appendChild(newLi);
}
