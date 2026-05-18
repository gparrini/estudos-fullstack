// =================================================================
// FORMA 1: DECLARAÇÃO E EXPRESSÃO DE FUNÇÃO (FUNCTION DECLARATION) 
// =================================================================

// Se descomentarmos as linhas abaixo, o código funciona perfeitamente!
// Por quê? O JavaScript sofre "Hoisting" (içamento), ou seja, ele move todas as 
// declarações de funções para o topo do arquivo antes de rodar o código.
// Por isso, você PODE chamar uma Declaração de Função ANTES dela ser escrita.

// let totalAntigo = somaTradicional(3, 4) + 10; 
// console.log(totalAntigo); // Funcionaria!

function somaTradicional(a, b) {
  return a + b;
}


// =================================================================
// FORMA 2: EXPRESSÃO DE FUNÇÃO (FUNCTION EXPRESSION)
// =================================================================

// Aqui, estamos criando uma função e ATRIBUINDO ela a uma variável chamada 'total'.
// 💡 Dica de boa prática: Quando jogamos uma função na variável, omitimos o nome dela.
// Em vez de: let total = function soma(a, b)
// Usamos:    let total = function(a, b) (chamada de função anônima).
let total = function(a, b) {
  return a + b;
};

// ⚠️ ATENÇÃO AO HOISTING EM EXPRESSÕES:
// Diferente da declaração tradicional, as Expressões de Função NÃO sofrem hoisting completo.
// Se você tentasse rodar `console.log(total(3, 4))` na LINHA 1 deste arquivo, 
// o JavaScript daria um erro dizendo que não pode acessar 'total' antes da inicialização.

// Chamando a Expressão de Função através do nome da VARIÁVEL:
console.log(total(3, 4));   // Exibe 7
console.log(total(13, 4));  // Exibe 17
console.log(total(31, 14)); // Exibe 45
console.log(total(3, 24));  // Exibe 27


/*
================================================================
📝 RESUMO DO APRENDIZADO: DECLARAÇÃO VS EXPRESSÃO
================================================================

1. DECLARAÇÃO DE FUNÇÃO (Function Declaration):
   - Sintaxe: function minhaFuncao() { ... }
   - Comportamento: Sofre Hoisting. Pode ser chamada em qualquer parte do código, 
     mesmo antes da linha onde foi criada.

2. EXPRESSÃO DE FUNÇÃO (Function Expression):
   - Sintaxe: let minhaFuncao = function() { ... }
   - Comportamento: Não permite o chamado antes de sua criação (regrada pelo escopo da variável).
   - Uso comum: Muito utilizada quando queremos passar funções como argumentos para outras 
     funções (callbacks) ou limitar o escopo de onde ela pode ser vista.

3. FUNÇÕES ANÔNIMAS:
   - É a função que não tem um nome próprio. Ela nasce e é jogada direto para dentro 
     de uma variável, que passa a controlar a sua execução.
*/
