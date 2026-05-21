// =================================================================
// 1. DADOS DE ENTRADA (OBJETO E MENSAGENS)
// =================================================================

// O usuário atual torce para o 'Botafogo'
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


// =================================================================
// 2. ESTRUTURA CONDICIONAL: SWITCH CASE
// =================================================================

// O 'switch' avalia a variável colocada nos parênteses uma única vez.
// Ele funciona como um "guia de caminhos": ele vai olhar o valor de 'usuario.time'
// e pular direto para o 'case' que corresponder exatamente ao texto.
switch (usuario.time) {

  // 💡 TRUQUE DO MULTI-CASE (Casos Agrupados):
  // Se o time for 'Fluminense' OU 'São Paulo' OU 'Grêmio', o código vai caindo
  // de um case para o outro até achar uma instrução e um 'break'. Todos esses 3
  // vão receber a mesma 'mensagemDeBoasVindas1'.
  case 'Fluminense':
  case 'São Paulo':
  case 'Grêmio':
    console.log(mensagemDeBoasVindas1);
    break; // 🛑 O 'break' é o freio de mão! Ele diz: "Pare aqui e saia do switch".

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

  // 🛡️ O DEFAULT (O Caso Padrão):
  // Ele funciona exatamente como o 'else'. Se o JavaScript ler todos os casos acima
  // e nenhum deles bater com o time do usuário (que é o caso do 'Botafogo'),
  // ele cai automaticamente aqui no 'default'.
  default:
    console.log(mensagemDeBoasVindasGeral);
    // Nota: No último item (default), o 'break' é opcional porque o switch já está acabando.
}