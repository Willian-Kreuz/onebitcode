const form = document.getElementById("orderForm"); //aqui é puxado o formulário que está com ID "orderForm"

form.addEventListener("submit", function (ev) {
  //Adicionar um evento
  ev.preventDefault();//Utilizando esse preventDefalut, o formulário não irá atualizar sozinho, com isso, as informações ficarão salvas

  const name = document.querySelector('input[name="name"]').value; //querySelector utiliza a mesma propriedade do CSS. Nesse caso, pegamos o input que possui o name = "name".
  const address = document.querySelector('input[name="address"]').value;
  const breadType = document.querySelector('select[name="breadType"]').value; //Aqui, utilizamos o select, pois esse é a tag que está no HTML
  const main = document.querySelector('input[name="main"]').value; //Estamos pegando o input com nome = "main"
  const observations = document.querySelector(
    'textarea[name="observations"]'
  ).value; // Nesse, estamos selecionando a área de texto (textarea) do html

  let salad = ""; //criamos essa variável para utilizarmos dentro da function
  document
    .querySelectorAll('input[name="salad"]:checked')
    .forEach(function (item) {
      salad += " - " + item.value + "\n";
    });
  //No código acima, utilizamos o querySelectorAll, para selecionarmos tudo
  //Dentro, passamos o input com name = salad e utilizamos o :checked, que irá pegar os itens selecionados
  //utilizamos o forEach para percorrer as opções e dentro, uma function adicionando os itens

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations,
  });

  alert(
    "Pedido Realizado!" +
      "\nNome do cliente: " +
      name +
      "\nEndereço de entrega: " +
      address +
      "\nTipo de pão: " +
      breadType +
      "\nRecheio: \n - " +
      main +
      "\n" +
      salad +
      "Observações: " +
      observations
  );
});
