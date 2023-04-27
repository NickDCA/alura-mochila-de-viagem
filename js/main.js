const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((item) => {
  criaElemento(item);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = event.target.elements['nome'];
  const quantidade = event.target.elements['quantidade'];

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  itens.push(itemAtual);

  localStorage.setItem('itens', JSON.stringify(itens));

  //   console.log(event.target.elements['nome'].value);
  //   console.log(event.target.elements['quantidade'].value);

  criaElemento(itemAtual);

  nome.value = '';
  quantidade.value = '';
});

function criaElemento(item) {
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = item.quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);
}
