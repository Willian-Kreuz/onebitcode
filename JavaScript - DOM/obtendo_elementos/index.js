function show() {
  const contactList = document.getElementById("contact-list"); //Pega apenas o html com o ID informado
  console.log(contactList);

  const listElement = document.getElementsByTagName("li"); //Pega vários elementos do HTML
  console.log(listElement);

  const contactInputs = document.getElementsByClassName("contact-input"); //Pega o elemento HTML pela classe
  console.log(contactInputs);

  const contact1 = document.getElementsByName("contact1"); //Pegamos o HTML pelo name que é informado
  console.log(contact1);

  const contacts = document.querySelectorAll("#contact-list > li > label"); //Serve para pegar um elemento exato, nesse caso, quero os labels, que estão dentro do li que estão dentro do ID contatc-list
  console.log(contacts);

  const firstContact = document.querySelector("#contact-list > li > label"); //Serve para pegar apenas um elemento. Ele pegará o primeiro elemento que aparecer
  console.log(firstContact);
}
