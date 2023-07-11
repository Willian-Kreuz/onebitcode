function addContact() {
  const contactSection = document.getElementById("contacts-list"); //Puxei a section com id contacts-list

  const h3 = document.createElement("h3");
  h3.innerText = "Contato";

  const ul = document.createElement("ul");

  const nameLi = document.createElement("li"); //Criei uma li
  nameLi.innerText = "Nome: "; //Terá como texto a palavra Nome
  const nameInput = document.createElement("input"); //Criei um input
  nameInput.type = "text"; //Será do tipo texto
  nameInput.name = "fullname"; //Terá name escrito "fullname"
  nameLi.appendChild(nameInput); //Aqui amarrei o nameInput dentro do NameLi
  ul.appendChild(nameLi); //Aqui amarrei o nameLi dentro da ul
  ul.appendChild(document.createElement("br")); //Aqui é criado um elemento dentro da ul para pular uma linha

  const phoneLi = document.createElement("li"); //Criei uma li
  phoneLi.innerText = "Telefone: "; //Terá escrito Telefone na frente
  const phoneInput = document.createElement("input"); //Criei um input
  nameInput.type = "text"; //Será do tipo texto
  nameInput.name = "phone"; //Terá name escrito "phone"
  phoneLi.appendChild(phoneInput); //Amarrei o phoneInput dentro de phoneLi
  ul.appendChild(phoneLi); //Amarrei o phoneLi dentro da Ul
  ul.appendChild(document.createElement("br"));

  const addressLi = document.createElement("li");
  addressLi.innerText = "Endereço";
  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.name = "address";
  addressLi.appendChild(addressInput);
  ul.appendChild(addressLi);
  ul.appendChild(document.createElement("br"));

  contactSection.append(h3, ul); //Append serve para amarrar mais coisas, nesse caso, amarrei dentro da section o h3 e a ul
}

function removeContact() {
  const contactSection = document.getElementById("contacts-list"); //Puxamos a section que tem o id "Contacts-list"
  const titles = document.getElementsByTagName("h3"); //pegamos todas as tags h3
  const contacts = document.getElementsByTagName("ul"); //Pegamos todas as ul

  contactSection.removeChild(titles[titles.length - 1]); //removeChild serve para remover um laço, nesse caso, estamos removendo os titles (h3), começando pelo final
  contactSection.removeChild(contacts[contacts.length - 1]); //Aqui, estamos removendo (ul), começando pelo final
}
