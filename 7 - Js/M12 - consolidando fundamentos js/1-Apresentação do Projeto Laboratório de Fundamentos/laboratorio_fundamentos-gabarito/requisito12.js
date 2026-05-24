// Crie uma função que receba uma frase e retorne a quantidade de palavras que ela contém.
// Função: contarPalavras
// Entrada: // contarPalavras("Olá, tudo bem?");
// Saída: // 3
function contarPalavras(frase) {
  let contador = 0;
  const palavras = frase.trim().split(" "); // garante retirar espaços iniciais e finais/ e também os que estão no meio da frase

  for (let index = 0; index < palavras.length; index++) {
    if (palavras[index] !== "") {
      //ignorar strings vazias
      contador++;
    }
  }

  return contador;
}

let frase = "Olá, tudo bem com você?";
console.log(contarPalavras(frase));

// let frase = "Olá Mundo!";
// console.log(frase.trim());
