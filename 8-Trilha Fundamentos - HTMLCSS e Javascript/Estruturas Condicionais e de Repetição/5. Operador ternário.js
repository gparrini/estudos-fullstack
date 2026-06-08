const usuario = { nome: 'Daniel', idade: 17, time: 'Sport' };
const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor Vascaíno!';
const mensagemDeBoasVindasGeral = 'Bem vindo, amante do esporte!';

usuario.time === 'Fluminense' && usuario.idade >= 18
  ? console.log(mensagemDeBoasVindas1)
  : usuario.time === 'Flamengo' && usuario.idade >= 18
  ? console.log(mensagemDeBoasVindas2)
  : usuario.idade >= 18
  ? console.log(mensagemDeBoasVindasGeral)
  : console.log('Não vendemos ingresso para torcedores menores de 18 anos');

const mensagemDeEscolha =
  'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
