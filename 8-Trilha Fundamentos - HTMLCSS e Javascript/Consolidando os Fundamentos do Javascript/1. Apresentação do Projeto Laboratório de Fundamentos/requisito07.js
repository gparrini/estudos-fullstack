// Crie uma função que receba uma frase e retorne a quantidade de vogais contidas nela.
// Função: contarVogais.
//  Entrada: contarVogais("Olá, tudo bem?");
// Saída: 5

function contarVogais(frase) {
  let vogais = "aeiouáéíóúãâêîôû";
  let contador = 0;
  for (let index = 0; index < frase.length; index++) {
    const letra = frase[index].toLowerCase();
    if (
      vogais.includes(letra)
      //   letra === "a" ||
      //   letra === "e" ||
      //   letra === "i" ||
      //   letra === "o" ||
      //   letra === "u" ||
      //   letra === "á" ||
      //   letra === "â" ||
      //   letra === "ã"
    ) {
      contador++; // somar + 1 ao valor armazenado do nosso contador.
    }
  }

  return contador;
}

console.log(contarVogais("Olá, tudo bém úia?"));
