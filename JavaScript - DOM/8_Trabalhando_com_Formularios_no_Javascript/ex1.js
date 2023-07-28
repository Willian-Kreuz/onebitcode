const form = document.getElementById("jogador");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const nome = document.querySelector('input[name="nome"]').value;
  const posicao = document.querySelector('select[name="posicao"]').value;
  const pernaBoa = document.querySelector('input[name="main"]').value;

  const confirmacao = confirm(
    "Você deseja cadastar o jogador " + nome + " que atua como " + posicao + "?"
  );

  if (confirmacao) {
    alert("Jogador cadastrado");
    alert(
      "Jogador: " + nome + "\nPosição: " + posicao + "\nPerna Boa: " + pernaBoa
    );
  }

  document.querySelector('input[name="nome"]').value = "";
  document.querySelector('select[name="posicao"]').value = "";
});
