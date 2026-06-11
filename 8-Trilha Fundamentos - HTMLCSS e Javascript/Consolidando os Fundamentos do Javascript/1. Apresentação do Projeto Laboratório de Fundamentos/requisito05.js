// Crie uma função que receba uma frase como parâmetro e retorne um array
// contendo as palavras que compõem essa frase, separadas por espaços.
// Função: dividirFrase

// Entrada:  dividirFrase("Esta é uma frase de exemplo.");
//  Saída:  ["Esta", "é", "uma", "frase", "de", "exemplo."]

function dividirFrase(frase) {
  let fraseDivida = frase.split(" ");
  return fraseDivida;
}

let frase = "Esta é uma frase de exemplo.";
console.log(dividirFrase(frase));
