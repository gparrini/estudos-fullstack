// =================================================================
// 1. CONFIGURAÇÃO DOS DADOS DO USUÁRIO
// =================================================================

// O usuário atual tem 17 anos (Menor de idade) e torce para o Sport
const usuario = { nome: 'Daniel', idade: 17, time: 'Sport' };

const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor Vascaíno!';
const mensagemDeBoasVindasGeral = 'Bem vindo, amante do esporte!';


// =================================================================
// 2. OPERADOR TERNÁRIO ENCADEADO COM OPERADORES LÓGICOS
// =================================================================

// 🧠 RECONHECENDO A SINTAXE:
// Uma estrutura de operador ternário segue sempre esta ordem:
// Condição (Teste) ? Se for Verdadeiro : Se for Falso

// O operador '&&' (E lógico) exige que as DUAS condições sejam verdadeiras ao mesmo tempo.

usuario.time === 'Fluminense' && usuario.idade >= 18 // 1º TESTE: É tricolor E maior de idade?
  ? console.log(mensagemDeBoasVindas1)               // Se SIM: Mostra a mensagem 1.
  : usuario.time === 'Flamengo' && usuario.idade >= 18 // Se NÃO (:): Passa para o 2º TESTE: É flamenguista E maior de idade?
  ? console.log(mensagemDeBoasVindas2)               // Se SIM: Mostra a mensagem 2.
  : usuario.idade >= 18                                // Se NÃO (:): Passa para o 3º TESTE: É apenas maior de idade (qualquer outro time)?
  ? console.log(mensagemDeBoasVindasGeral)           // Se SIM: Mostra a mensagem Geral.
  : console.log('Não vendemos ingresso para torcedores menores de 18 anos'); // Se NÃO para tudo (:): Executa essa última mensagem de bloqueio.

// No nosso caso: O Daniel tem 17 anos. O código vai testar o primeiro, o segundo, o terceiro... 
// Como ele falha no quesito 'idade >= 18' em todos os testes, o JavaScript cai direto na última linha!


// =================================================================
// 3. FLUXO NORMAL DO PROGRAMA
// =================================================================

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);