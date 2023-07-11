function adicionando() {
  const lista = document.getElementById("itens");

  const h2 = document.createElement("h2");
  h2.innerText = "Item";

  const ul = document.createElement("ul");

  const itemLi = document.createElement("li");
  itemLi.innerText = "Item";
  const nomeInput = document.createElement("input");
  nomeInput.type = "text";
  nomeInput.name = "nome";
  itemLi.appendChild(nomeInput);
  ul.appendChild(itemLi);

  const precoLi = document.createElement("li");
  precoLi.innerText = "Preço";
  const precoInput = document.createElement("input");
  precoInput.type = "text";
  precoInput.name = "preço";
  precoLi.appendChild(precoInput);
  ul.appendChild(precoLi);

  lista.append(h2, ul);
}

function removendo() {
  const lista = document.getElementById("itens");

  const titulos = document.getElementsByTagName("h2");
  const listagem = document.getElementsByTagName("ul");

  lista.removeChild(titulos[titulos.length - 1]);
  lista.removeChild(listagem[listagem.length - 1]);
}
