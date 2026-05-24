// Crie uma função que receba um número inteiro e retorne um booleano indicando se o número é primo.
// Função: ehPrimo
// Entrada: ehPrimo(7);
// ehPrimo(4);
// Saída:  true ______  false

function ehPrimo(numero) {
  if (numero <= 1) return false; // Números menores ou iguais a 1 não são primos

  for (let index = 2; index < numero; index++) {
    if (numero % index === 0) return false; // Se for divisel por index, não é primo
  }
  return true; // entende não encontrou nenhum divisor, é primo.
}

console.log(ehPrimo(7)); // true 1 -7
console.log(ehPrimo(4)); // false 1- 2 - 4
