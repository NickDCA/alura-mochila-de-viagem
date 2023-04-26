const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let nome = event.target.elements['nome'].value;
  let quantidade = event.target.elements['quantidade'].value;

  //   console.log(event.target.elements['nome'].value);
  //   console.log(event.target.elements['quantidade'].value);

  criaElemento(nome, quantidade);
});

function criaElemento(nome, quantidade) {
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);
}
