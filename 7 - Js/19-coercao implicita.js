// --- COERÇÃO IMPLÍCITA ---
// É quando o JavaScript converte os tipos de dados automaticamente.

// IGUALDADE (==): Compara apenas o valor. 
// O JS transforma a string "5" em número antes de comparar[cite: 37, 38, 39].
console.log(5 == "5"); // true
console.log("5" == 5); // true

// ADIÇÃO COM STRING (+): 
// O sinal de + é usado tanto para somar números quanto para juntar textos (concatenar).
// Quando há uma string envolvida, o número é convertido para string e os dois são grudados.
console.log(5 + "5"); // "55"

// OPERAÇÕES MATEMÁTICAS (-, *, /): 
// Ao contrário da soma, esses operadores só existem para números. 
// O JS tenta converter as strings para Number para conseguir fazer a conta[cite: 3].
console.log("10" - 5);  // 5 (a string "10" virou o número 10) [cite: 10, 11]
console.log("3" * "2"); // 6 (ambas viraram números para multiplicar) [cite: 13, 14]

// COMPARAÇÃO DE VAZIOS:
// No JavaScript, null e undefined são considerados "equivalentes" na igualdade solta (==).
console.log(null == undefined); // true