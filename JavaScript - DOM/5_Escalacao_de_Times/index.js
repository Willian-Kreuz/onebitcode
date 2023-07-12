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

    document.getElementById("posicao").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
  }
}

function remover() {
  const listaTime = document.getElementById("listaDoTime");

  const numeroRemovido = document.getElementById("numeroRemovido").value;

  const confirmacao = confirm(
    "Você confirma a remoção do jogador que utiliza a camisa " +
      numeroRemovido +
      "?"
  );

  if (confirmacao) {
    const li = document.getElementById("player- " + numeroRemovido);
    listaTime.removeChild(li);
    document.getElementById("numeroRemovido").value = "";
  }
}
