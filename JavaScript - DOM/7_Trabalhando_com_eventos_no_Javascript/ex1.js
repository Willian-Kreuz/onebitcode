function cadastrar(ev) {
  const sectionElement = ev.currentTarget.parentNode;
  const name = sectionElement.children.name.value;
  const senha = sectionElement.children.senha.value;
  const confirmaSenha = sectionElement.children.confirmaSenha.value;

  if (senha === confirmaSenha) {
    alert("Cadastro do usuário " + name + " efetuado com sucesso!");
  } else {
    alert("Senhas não conferem");
  }
}

const button = document.getElementById("cadastro");

button.addEventListener("click", cadastrar);
