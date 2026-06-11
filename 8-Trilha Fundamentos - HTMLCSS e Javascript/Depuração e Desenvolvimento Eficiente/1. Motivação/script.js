const botaoDobrarQuantidades = document.getElementById(
  'botao-dobrar-quantidade'
);
const botaoDesconto = document.getElementById('botao-desconto');
const botaoReduzirQuantidades = document.getElementById(
  'botao-reduzir-quantidade'
);
const botaoReajustePrecos = document.getElementById('botao-reajuste-precos');

const listaIdsCelulasPreco = [
  'preco-caneca',
  'preco-camisa',
  'preco-caderno',
  'preco-garrafa',
];
const listaIdsCelulasQuantidade = [
  'quantidade-caneca',
  'quantidade-camisa',
  'quantidade-caderno',
  'quantidade-garrafa',
];

function dobrarQuantidades() {
  listaIdsCelulasQuantidade.forEach((id) => {
    const celulaQuantidade = document.getElementById(id);
    const quantidadeAtual = Number(celulaQuantidade.innerText);
    celulaQuantidade.innerText = quantidadeAtual * 2;
  });
}

function descontarDezPorCento() {
  listaIdsCelulasPreco.forEach((id) => {
    const celulaPreco = document.getElementById(id);
    const precoAtual = celulaPreco.innerText;
    celulaPreco.innerText = `R$ ${Number(precoAtual * 0.9)
      .toFixed(2)
      .replace('.', ',')}`;
  });
}

function cortarQuantidadesPelaMetade() {
  listaIdsCelulasQuantidade.forEach((id) => {
    const celulaQuantidade = document.getElementById(id);
    const quantidadeAtual = Number(celulaQuantidade.innerText);
    celulaQuantidade.innerText = Math.floor(quantidadeAtual / 5);
  });
}

function reajustarPrecos() {
  listaIdsCelulasPreco.forEach((id) => {
    const celulaPreco = document.getElementById(id);
    const precoAtual = celulaPreco.innerText;
    celulaPreco.innerText = `R$ ${Number(precoAtual * 1.05)
      .toFixed(2)
      .replace('.', ',')}`;
  });
}

botaoDobrarQuantidades.addEventListener('click', reajustarPrecos);
botaoDesconto.addEventListener('click', dobrarQuantidades);
botaoReduzirQuantidades.addEventListener('click', cortarQuantidadesPelaMetade);
botaoReajustePrecos.addEventListener('click', dobrarQuantidades);
