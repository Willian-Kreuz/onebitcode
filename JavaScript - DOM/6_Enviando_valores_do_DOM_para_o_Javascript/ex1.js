function cadastrar(element) {
  const nome = element.children.nome.value;
  const departamento = element.children.departamento.value;
  const numero = element.children.numero.value;

  if (numero > 0) {
    alert(
      "Cadastro realizado com sucesso!\nNúmero: " +
        numero +
        "\nFuncionário: " +
        nome +
        "\nDepartamento: " +
        departamento
    );
  } else {
    alert("O número do cadastro não pode ser inferior a 0!");
  }
}
