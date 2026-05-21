// =================================================================
// 1. DECLARAÇÃO DE DADOS (OBJETOS E VARIÁVEIS)
// =================================================================

// Criamos um objeto 'usuario' para simular os dados de quem está acessando o sistema.
const usuario = { nome: 'Daniel', idade: 29, time: 'Fluminense' };

// Armazenamos os textos em constantes para deixar o código limpo e fácil de ler.
const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemGeral = 'Bem vindo, amante do futebol!'; // Mensagem caso seja outro time


// =================================================================
// 2. ESTRUTURAS CONDICIONAIS (IF / ELSE IF / ELSE)
// =================================================================

// O 'if' (que significa SE) avalia a expressão dentro dos parênteses.
// Se ela for VERDADEIRA (true), o JavaScript executa o bloco dentro das chaves {}.
// O operador '===' checa se o valor E o tipo do dado são estritamente iguais.
if (usuario.time === 'Fluminense') {
  console.log(mensagemDeBoasVindas1); 
} 

// O 'else if' (SENÃO SE) serve para encadear uma segunda verificação exclusiva.
// O JavaScript SÓ vai testar essa linha se o primeiro 'if' lá de cima tiver dado FALSO.
// Isso poupa processamento do computador!
else if (usuario.time === 'Flamengo') {
  console.log(mensagemDeBoasVindas2); 
} 

// O 'else' (SENÃO) é o nosso plano B de segurança.
// Se nenhuma das condições anteriores for verdadeira (ex: se o time for 'Vasco' ou 'Botafogo'),
// o JavaScript cai direto aqui dentro. Ele não precisa de parênteses com condição.
else {
  console.log(mensagemGeral);
}

// =================================================================
// 3. ESTRUTURAS DE REPETIÇÃO (LOOPS / LAÇOS)
// =================================================================
// Adicionei esta seção para complementar seus estudos de repetição!
// Imagine que precisamos listar todos os setores disponíveis do estádio.

const setoresMaracana = ['Norte', 'Sul', 'Leste', 'Oeste', 'Maracanã Mais'];

console.log('\n--- Carregando Setores Disponíveis ---');

// O laço 'for' repete um bloco de código enquanto uma condição for verdadeira.
// Ele é dividido em 3 partes separadas por ponto e vírgula (;):
//   1ª parte (let i = 0): Criamos uma variável contadora que começa no índice 0.
//   2ª parte (i < setoresMaracana.length): A condição de parada. O loop roda enquanto 'i' for menor que o tamanho da lista (5).
//   3ª parte (i++): O incremento. Adiciona +1 ao valor de 'i' no final de cada volta.
for (let i = 0; i < setoresMaracana.length; i++) {
  // A cada volta do loop, acessamos a lista na posição do 'i' atual (0, depois 1, depois 2...)
  console.log(`Setor ${i + 1}: ${setoresMaracana[i]}`);
}
console.log('-------------------------------------\n');


// =================================================================
// 4. FLUXO NORMAL DO SISTEMA (MENSAGENS FINAIS)
// =================================================================

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);