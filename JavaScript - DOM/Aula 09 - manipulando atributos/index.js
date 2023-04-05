const input = document.getElementById('input') // acessei o id do input

document.getElementById('value').addEventListener('click', function(){
  input.value = 'Olá, mundo!'

  console.log(input.value)
  console.log(input.getAttribute('value'))
})//No html, foi colocado que o value do input é 'Valor inicial'
//Puxamos o id 'value' do button e adicionamos o evento click, que irá alterar o valor do input (input.value) para 'Olá Mundo'

document.getElementById('type').addEventListener('click', function(){
  input.type = input.type !== 'radio' ? 'radio' : 'text'
})//Puxamos o button com id type e adicionamos um evento
//Nesse evento, ele irá comparar se o input é igual a um radio, se não for, ele transforma em radio e se for ele transforma em campo de texto

document.getElementById('placeholder').addEventListener('click', function(){
  input.placeholder = 'Digite algo...'
})//Adiciona a mensagem 'digite algo...' no campo do input

document.getElementById('disable').addEventListener('click', function(){
  input.setAttribute('disabled', !input.disabled)
})// Ao clicar no botão, o input é desabilitado

document.getElementById('data').addEventListener('click', function(){
  const data = input.dataset.somethingElse//Puxa o valor que foi passado no html
  console.log(data) 
})//dataset -> seleciona todos os datas que tiverem dentro do elemento