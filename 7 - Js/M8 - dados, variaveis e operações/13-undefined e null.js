// --- TIPOS BÁSICOS ---
let mensagem = "Olá impressionador"; // String (Texto)
let preco = 50;                     // Number (Número)
let logado = true;                   // Boolean (Verdadeiro ou Falso)

// --- UNDEFINED (Indefinido) ---
// O 'undefined' acontece quando criamos a variável mas não damos nenhum valor a ela.
// É como se o JavaScript dissesse: "Eu sei que essa caixa existe, mas não tem nada dentro ainda."
let produto; 
let carrinho = undefined; // Você também pode atribuir manualmente, mas raramente é necessário.

console.log(typeof produto);  // Retorna "undefined"
console.log(typeof carrinho); // Retorna "undefined"

// --- NULL (Nulo) ---
// O 'null' é uma ausência de valor intencional. 
// Você usa para dizer: "Essa variável está vazia de propósito".
let lista = null;

console.log(lista); // Retorna null

// --- A CURIOSIDADE DO JAVASCRIPT ---
console.log(typeof lista); // Retorna "object"