function clicando() {
  const ul = document.getElementById("classe");

  const newLi = document.createElement("li");
  newLi.id = "id-creator";
  newLi.innerText = "Criado: ";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input";

  newLi.appendChild(newInput);
  ul.appendChild(newLi);
}
