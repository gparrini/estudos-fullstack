// =================================================================
// 1. RECEBENDO UMA FUNÇÃO COMO ARGUMENTO (CALLBACK)
// =================================================================

// 'aplicarOperacao' é uma Função de Alta Ordem porque o seu segundo 
// parâmetro ('operacao') espera receber uma FUNÇÃO inteira.
function aplicarOperacao(x, operacao) {
  // Aqui dentro, executamos a função que foi recebida, passando 'x' para ela
  return operacao(x);
}

// Uma função comum que serve para dobrar um número
function dobrar(numero) {
  return numero * 2;
}

// ⚠️ SACADA GENIAL AQUI: 
// Passamos 'dobrar' SEM os parênteses (). 
// Se passássemos 'dobrar()', estaríamos mandando o RESULTADO da função. 
// Sem os parênteses, estamos mandando a própria RECEITA da função para dentro de 'aplicarOperacao'.
const resultado = aplicarOperacao(5, dobrar); 
console.log(resultado); // Exibe 10


// =================================================================
// 2. RETORNANDO UMA FUNÇÃO (FÁBRICA DE FUNÇÕES / CLOSURE)
// =================================================================

// 'criarIncrementador' é uma Função de Alta Ordem porque o retorno dela 
// não é um número ou texto, mas sim uma NOVA FUNÇÃO.
function criarIncrementador(incremento) {
  // Ela retorna uma função anônima que vai "lembrar" do valor de 'incremento'
  return function (numero) {
    return numero + incremento;
  };
}

// 'incrementoPor2' agora passa a SER uma função! 
// Ela se tornou aquela função interna que foi retornada, onde o 'incremento' vale 2.
const incrementoPor2 = criarIncrementador(2);

// Chamamos a nova função passando o número 5
console.log(incrementoPor2(5)); // Exibe 7 (5 + 2)


/*
================================================================
📝 RESUMO DO APRENDIZADO: FUNÇÕES DE ALTA ORDEM (HOF)
================================================================

1. O QUE SÃO: 
   - São funções que tratam outras funções como cidadãs de primeira classe. 
     Ou seja, funções podem ser passadas como argumentos ou retornadas por outras funções.

2. CALLBACK FUNCTIONS:
   - É o nome dado à função que é enviada "de carona" dentro de outra (como a função 'dobrar' 
     sendo enviada para 'aplicarOperacao'). Ela é "chamada de volta" lá dentro.

3. CLOSURE (EFEITO MEMÓRIA):
   - No segundo exemplo, quando a função de dentro nasce, ela memoriza o ambiente onde 
     foi criada. Por isso, mesmo depois que 'criarIncrementador(2)' terminou de rodar, 
     a função filha guardou o número 2 na memória para sempre.

4. UTILIDADE:
   - Tornam o código extremamente flexível. Você cria funções genéricas (como 'aplicarOperacao') 
     que podem mudar de comportamento completamente dependendo da função que você injetar nelas.
*/