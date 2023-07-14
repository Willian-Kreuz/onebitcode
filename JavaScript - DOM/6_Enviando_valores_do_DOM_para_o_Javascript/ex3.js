let soma = 0;
function adicionar(element) {
  const produto = element.children.mercadoria.value;
  const valor = Number(element.children.valor.value);

  const lista = document.getElementById("itens");

  const listaLi = document.createElement("li");
  listaLi.innerText = produto + " - R$ " + valor;
  lista.appendChild(listaLi);

  soma = soma + valor;

  document.getElementById("valorFinal").innerText = soma.toFixed(2);

  element.children.mercadoria.value = "";
  element.children.valor.value = "";
}
