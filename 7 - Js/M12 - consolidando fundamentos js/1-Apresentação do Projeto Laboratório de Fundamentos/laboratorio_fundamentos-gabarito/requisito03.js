// Crie uma função que receba dois valores e retorne verdadeiro se ambos forem considerados "truthy".
// Função: compararValores

//(ou seja, se ambos forem diferentes de 0, null, undefined, false ou uma string vazia)

// compararValores(5, "texto");
// compararValores(0, "texto");
// Saída: true _______  false

// Boolean(false); // falsy
// Boolean(0); // false - falsy
// Boolean(true); // true - truthy
// Boolean(42); // true

function compararValores(valor1, valor2) {
  let booleano = Boolean(valor1 && valor2);
  return booleano;
}

console.log(compararValores(5, "texto")); // true - truthy
console.log(compararValores(0, "texto")); // false
console.log(compararValores(0, false)); // false

// (zero, null, undefined, false, string vazia = todos eles retornam False);
