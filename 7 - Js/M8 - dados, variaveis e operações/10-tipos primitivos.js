/**
 * EXPLICAÇÃO: TIPOS PRIMITIVOS EM JAVASCRIPT
 * Tipos primitivos são os dados básicos que representam valores simples e imutáveis.
 */

// 1. String: Representa sequências de caracteres, como nomes ou textos.
const saudacao = "Olá mundo"; 
const idUsuario = "123"; // Mesmo com números, as aspas o tornam uma String.

// 2. Number: Representa números, sejam eles inteiros ou decimais (ponto flutuante).
const pi = 3.14;
const idade = 42;

// 3. Boolean: Representa um valor lógico, podendo ser apenas verdadeiro ou falso.
const estaChovendo = false;
const ehMaiorDeIdade = true;

// 4. Null: Representa a ausência intencional de qualquer valor (vazio por escolha).
let campoOpcional = null;

// 5. Undefined: Valor que o JavaScript atribui a variáveis que foram criadas, 
// mas ainda não receberam um valor inicial.
let resultadoFinal; 
console.log(resultadoFinal); // Saída: undefined