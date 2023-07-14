function somar(element) {
  const resultado = document.getElementById("resultado");

  const numero1 = Number(element.children.numero1.value);
  const numero2 = Number(element.children.numero2.value);
  const soma = numero1 + numero2;

  const label = document.createElement("label");
  label.innerText = " " + soma;

  resultado.appendChild(label);
}

function diminuir(element) {
  const resultado = document.getElementById("resultado");

  const numero1 = Number(element.children.numero1.value);
  const numero2 = Number(element.children.numero2.value);
  const diminuir = numero1 - numero2;

  const label = document.createElement("label");
  label.innerText = " " + diminuir;

  resultado.appendChild(label);
}
function dividir(element) {
  const resultado = document.getElementById("resultado");

  const numero1 = Number(element.children.numero1.value);
  const numero2 = Number(element.children.numero2.value);
  const dividir = numero1 / numero2;

  const label = document.createElement("label");
  label.innerText = " " + dividir;

  resultado.appendChild(label);
}
function multiplicar(element) {
  const resultado = document.getElementById("resultado");

  const numero1 = Number(element.children.numero1.value);
  const numero2 = Number(element.children.numero2.value);
  const multiplicar = numero1 * numero2;

  const label = document.createElement("label");
  label.innerText = " " + multiplicar;

  resultado.appendChild(label);
}
