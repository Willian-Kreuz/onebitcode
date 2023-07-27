function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;//aqui peguei o evento (ev), depois peguei o alvo do evento (currentTarget) e por último peguei o nó pai dele (parentNode)
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " cadastrado!");
  } else {
    alert("As senhas não conferem");
  }
}

const button = document.getElementById("register-button");

//addEventListener serve para ficar "ouvindo" e quando for utilizado, o código que estiver dentro da function será executado
button.addEventListener("click", register);//Como parâmetro, primeiro devemos informar a ação que o botão irá esperar, nesse caso, é o click. Após clicado, será realizado uma função, nesse caso, a função register


//removeEventListener serve para remover eventos, porém, ao remover um evento, ele não fica mais disponível no site para o cliente utilizar
function removeEvent() {
  button.removeEventListener("click", register);
  alert("Evento removido");
}
