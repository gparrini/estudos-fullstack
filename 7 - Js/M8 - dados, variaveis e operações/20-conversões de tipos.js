// --- CONVERSÃO PARA STRING ---
let numero = 123;
console.log(typeof numero); // Retorna "number"

// String(valor): Transforma o número 123 no texto "123"
numero = String(numero);
console.log(typeof numero); // Retorna "string"

let numero2 = 45;
console.log(numero2); // Exibe o número 45
// .toString(): Outra forma de transformar um valor em texto
console.log(numero2.toString()); 

// --- CONVERSÃO PARA BOOLEANO (Truthy e Falsy) ---
let string = "Meu texto";
let num = 0;

// Boolean(valor): Checa se o valor é "verdadeiro" ou "falso" na lógica do JS.
console.log(Boolean(string)); // true (Qualquer texto com conteúdo é verdadeiro)
console.log(Boolean(num));    // false (O número 0 é sempre considerado falso)

// --- CONVERSÃO PARA NÚMERO ---
let stringNumber = "12345";

// Number(valor): Tenta transformar um texto em um número real para cálculos.
console.log(Number(stringNumber)); // 12345 (sucesso!)
console.log(Number(string));       // NaN (Not a Number)
// ^ Acima deu erro porque o texto "Meu texto" não pode virar um número.

// --- CONVERSÃO DE BOOLEANO PARA TEXTO ---
let booleano = true;
// Transforma o valor lógico true na palavra "true" (texto).
console.log(String(booleano));