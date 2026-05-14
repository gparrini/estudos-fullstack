// --- OPERADORES DE COMPARAÇÃO ---
// São usados para comparar valores. O resultado é sempre verdadeiro (true) ou falso (false).

// IGUALDADE (==): Compara apenas o valor, ignorando o tipo[cite: 37, 38].
// Aqui o JS converte o texto "5" em número para comparar.
console.log(5 == "5"); // true

// ESTRITA IGUALDADE (===): Compara o VALOR e o TIPO[cite: 40, 41].
// É considerada uma boa prática usar sempre este para evitar erros.
console.log(5 === "5"); // false (porque um é Number e o outro é String)

// DESIGUALDADE (!=): Verifica se os valores são diferentes (apenas valor)[cite: 43, 44].
console.log(5 != "5"); // false (o JS entende que os valores são "iguais")

// ESTRITA DESIGUALDADE (!==): Verifica se os valores e tipos são diferentes[cite: 46, 47].
// Também é uma boa prática para garantir precisão.
console.log(5 !== "5"); // true (são tipos diferentes)

// --- MAIOR E MENOR ---

// Maior que (>): Verifica se o da esquerda é maior que o da direita[cite: 49, 50].
console.log(10 > 20); // false
console.log(10 > 10); // false (10 não é maior que 10)

// Maior ou Igual que (>=): Inclui o próprio número na comparação[cite: 52, 53].
console.log(10 >= 10); // true

// Menor que (<): Verifica se o da esquerda é menor que o da direita[cite: 55, 56].
console.log(10 < 20); // true
console.log(10 < 10); // false

// Menor ou Igual que (<=): Verifica se é menor ou o mesmo valor[cite: 58, 59].
console.log(10 <= 10); // true

// --- EXEMPLO PRÁTICO: SISTEMA DE LOGIN ---
let senha = 1234;
let senhaDigitada = 12345;

// Aqui usamos a Estrita Igualdade para garantir que a senha seja idêntica.
let comparacao = senha === senhaDigitada; 
console.log("Aqui é a minha senha: " + comparacao); // Exibe: false