const initialArray = [
  2, 8, 5, 3, 9, 4, 1, 56, 23, 72, 64, 21, 9, 80, 7, 42, 12, 11, 15, 16, 92, 13,
  13, 17, 18, 73, 34, 2, 8, 5, 3, 9, 4, 1, 56, 23, 72, 64, 21, 9, 80, 7, 42, 12,
  11, 15, 16, 92, 13, 13, 17, 18, 73, 34, 2, 8, 5, 3, 9, 4, 1, 56, 23, 72, 64,
  21, 9, 80, 7, 42, 12, 11, 15, 16, 92, 13, 13, 17, 18, 73, 34, 2, 8, 5, 3, 9,
  4, 1, 56, 23, 72, 64, 21, 9, 80, 7, 42, 12, 11, 15, 16, 92, 13, 13, 17, 18,
  73, 34, 2, 8, 5, 3, 9, 4, 1, 56, 23, 72, 64, 21, 9, 80, 7, 42, 12, 11, 15, 16,
  92, 13, 13, 17, 18, 73, 34, 2, 8, 5, 3, 9, 4, 1, 56, 23, 72, 64, 21, 9, 80, 7,
  42, 12, 11, 15, 16, 92, 13, 13, 17, 18, 73, 34,
];

// const arrayInicial = [2, 8, 5, 3, 9, 4, 1];

//criar função que gera um array ordenado a partir de um desordenado. Lembrando, não vamos
//modificar o array original

function bubbleSort(array) {
  const arrayDesordenado = [...array];

  for (
    let numeroIteracao = 1;
    numeroIteracao < arrayDesordenado.length;
    numeroIteracao++
  ) {
    for (
      let numeroJanela = 0;
      numeroJanela < arrayDesordenado.length - 1;
      numeroJanela++
    ) {
      if (arrayDesordenado[numeroJanela] > arrayDesordenado[numeroJanela + 1]) {
        const temporario = arrayDesordenado[numeroJanela]; //2ms
        arrayDesordenado[numeroJanela] = arrayDesordenado[numeroJanela + 1]; //2ms
        arrayDesordenado[numeroJanela + 1] = temporario; //2ms
      }
    }
  }

  return arrayDesordenado;
}

// if (arrayDesordenado[1] > arrayDesordenado[2]) {
//     const temporario = arrayDesordenado[1]; // arrayDesordenado = [2, 8, 5, 3, 9, 4, 1]; temporario = 8;
//     arrayDesordenado[1] = arrayDesordenado[2]; // arrayDesordenado = [2, 5, 5, 3, 9, 4, 1]; temporario = 8;
//     arrayDesordenado[2] = temporario; // arrayDesordenado = [2, 5, 8, 3, 9, 4, 1]; temporario = 8;
//   }

console.log(`Esse é o meu array original [${initialArray}]`);
console.log(`Esse é o meu array ordenado [${bubbleSort(initialArray)}]`);
