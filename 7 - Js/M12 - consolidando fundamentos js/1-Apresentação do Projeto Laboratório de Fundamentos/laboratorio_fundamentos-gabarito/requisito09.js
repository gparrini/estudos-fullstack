//  Crie uma função que receba um array de números e retorne a média desses números.
// Função: calcularMedia
// Entrada: // calcularMedia([10, 20, 30, 40]);
// Saída: // 25

let numerosLista = [10, 20, 30, 40];

function calcularMedia(numeros) {
  let soma = 0; // controle
  for (let index = 0; index < numeros.length; index++) {
    soma += numeros[index]; // Somar os números do array
  }
  return soma / numeros.length;
}
console.log(calcularMedia(numerosLista));
