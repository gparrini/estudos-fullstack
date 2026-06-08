const usuario = { nome: 'Daniel', idade: 29, time: 'Botafogo' };
const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor Vascaíno!';
const mensagemDeBoasVindas4 = 'Bem vindo, torcedor Santista!';
const mensagemDeBoasVindas5 = 'Bem vindo, torcedor do Náutico!';
const mensagemDeBoasVindas6 = 'Bem vindo, torcedor do Atlético Mineiro!';
const mensagemDeBoasVindas7 = 'Bem vindo, torcedor do Cruzeiro!';
const mensagemDeBoasVindas8 = 'Bem vindo, torcedor do Corinthians!';

const mensagemDeBoasVindasGeral = 'Bem vindo, amante do esporte!';

switch (usuario.time) {
  case 'Fluminense':
  case 'São Paulo':
  case 'Grêmio':
    console.log(mensagemDeBoasVindas1);
    break;
  case 'Flamengo':
    console.log(mensagemDeBoasVindas2);
    break;
  case 'Vasco':
    console.log(mensagemDeBoasVindas3);
    break;
  case 'Santos':
    console.log(mensagemDeBoasVindas4);
    break;
  case 'Náutico':
    console.log(mensagemDeBoasVindas5);
    break;
  case 'AtléticoMG':
    console.log(mensagemDeBoasVindas6);
    break;
  case 'Cruzeiro':
    console.log(mensagemDeBoasVindas7);
    break;
  case 'Corinthians':
    console.log(mensagemDeBoasVindas8);
    break;
  default:
    console.log(mensagemDeBoasVindasGeral);
}

const mensagemDeEscolha =
  'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
