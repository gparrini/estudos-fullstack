// =================================================================
// 1. DADOS DO USUÁRIO E MENSAGENS
// =================================================================

const usuario = { nome: 'Daniel', idade: 29, time: 'Fluminense' };

const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor Vascaíno!';
const mensagemDeBoasVindasGeral = 'Bem vindo, amante do esporte!';

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';


// =================================================================
// 2. PREPARANDO O TERRENO PARA A REPETIÇÃO
// =================================================================

// Para que um laço de repetição não rode para sempre (o temido "loop infinito" 
// que trava o navegador), precisamos de uma variável para contar quantas voltas ele já deu.
let numeroDeRepeticoes = 0;


// =================================================================
// 3. LAÇO DE REPETIÇÃO: DO...WHILE (FAÇA...ENQUANTO)
// =================================================================

// A principal regra do 'do...while' é: ele SEMPRE executa o bloco de código 
// dentro das chaves pelo menos UMA vez, antes mesmo de checar se deveria.
do {
  // 1º PASSO: Executar as ações
  // Como o Daniel tem 29 anos e é Fluminense, ele vai passar no 1º teste do ternário
  // e o console vai exibir a mensagem Tricolor.
  usuario.time === 'Fluminense' && usuario.idade >= 18
    ? console.log(mensagemDeBoasVindas1)
    : usuario.time === 'Flamengo' && usuario.idade >= 18
    ? console.log(mensagemDeBoasVindas2)
    : usuario.idade >= 18
    ? console.log(mensagemDeBoasVindasGeral)
    : console.log('Não vendemos ingresso para torcedores menores de 18 anos');

  console.log(mensagemDeEscolha);
  console.log(mensagemFinal);

  // 2º PASSO: Atualizar o contador (MUITO IMPORTANTE)
  // 'numeroDeRepeticoes++' é o mesmo que 'numeroDeRepeticoes = numeroDeRepeticoes + 1'.
  // Se você esquecer essa linha, o número será sempre 0, e o programa nunca vai parar!
  numeroDeRepeticoes++;

// 3º PASSO: A Condição (A Pergunta)
// Após executar tudo, o JavaScript pergunta: "O número de repetições atual é menor que 5?"
// Se for SIM (true), ele volta lá para o 'do {' no topo e faz tudo de novo.
// Se for NÃO (false), ele quebra o ciclo e sai da repetição.
} while (numeroDeRepeticoes < 5);


// =================================================================
// 4. FIM DO PROGRAMA
// =================================================================

// Esta linha só será lida depois que o loop terminar de dar as suas 5 voltas 
// (quando o contador for 0, 1, 2, 3 e 4). Na vez do 5, a condição falha e o loop encerra.
console.log('Ingressos Esgotados');