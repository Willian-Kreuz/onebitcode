function adicionar() {
  const listaTime = document.getElementById("listaDoTime");

  const li = document.createElement("li");

  const posicao = document.getElementById("posicao").value;
  const nome = document.getElementById("nome").value;
  const numero = document.getElementById("numero").value;

  const confirmacao = confirm(
    "Você confirma a escalação do " + nome + " como " + posicao + "?"
  );

  if (confirmacao) {
    li.id = "player- " + numero;
    li.innerText = posicao + ": " + nome + " (" + numero + ") ";
    listaTime.appendChild(li);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}
