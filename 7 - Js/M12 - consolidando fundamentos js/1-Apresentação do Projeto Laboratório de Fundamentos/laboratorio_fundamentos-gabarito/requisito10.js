// Crie uma função que receba uma palavra e retorne um booleano indicando se a palavra é um palíndromo.
// Função: ehPalindromo
//  Entrada:  ehPalindromo("arara"); // Ana
//  ehPalindromo("cachorro");
//  Saída: true  _________  false

function ehPalindromo(palavra) {
  let palavraInvertida = ""; // ARARA - a=0 r=1 ,a=2... 6

  for (let index = palavra.length - 1; index >= 0; index--) {
    palavraInvertida += palavra[index]; // inverte a palavra
  }

  let ehPalindromo = palavra === palavraInvertida;
  return ehPalindromo; // compara a palavra original com a invertida
}

console.log(ehPalindromo("arara"));
console.log(ehPalindromo("ana"));
console.log(ehPalindromo("cachorro"));
