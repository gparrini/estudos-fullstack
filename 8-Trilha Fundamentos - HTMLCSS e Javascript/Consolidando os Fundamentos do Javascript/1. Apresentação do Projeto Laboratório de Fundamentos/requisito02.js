// Crie uma função que receba um array de nomes e retorne esse array ordenado em ordem alfabética.
// Função: ordenarNomes
// Entrada: ordenarNomes(['Ana', 'Elias', 'Carlos', 'Beatriz']);
// Saída: ['Ana', 'Beatriz', 'Carlos', ‘Elias’]

function ordenarNomes(listaNomes) {
  return listaNomes.sort();
}

let nomes = ["Zeus", "Ana", "Elias", "Carlos", "Beatriz"];
console.log(ordenarNomes(nomes));
