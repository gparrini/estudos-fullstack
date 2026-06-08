//Math = operações matematicas e Date = datas
// PI = 3.14159...

const PI = Math.PI;
console.log(PI);

const raizQuadrada = Math.sqrt(16); // 4 - raiz quadrada de um número
console.log(raizQuadrada);

const potencia = Math.pow(2, 8); // base, expoente
console.log(potencia);

//POTENCIA

// const potenciaFuncao = function potencia(base, expoente) {
//   let resultado = 1;

//   // Para potências positivas
//   for (let i = 0; i < expoente; i++) {
//     resultado *= base; // Multiplica o resultado pela base repetidamente
//   }

//   return resultado;
// };

// // Testando a função
// console.log(potenciaFuncao(2, 8)); // 8 (2^3 = 2 * 2 * 2)

// RAIZ QUADRADA

// const resultado = function raizQuadrada(num) {
//   if (num < 0) {
//     return NaN; // Raiz quadrada de números negativos não é real
//   }

//   let baixo = 0;
//   let alto = num;
//   let meio;
//   const precisao = 0.000001; // Precisão desejada

//   // Continua buscando até encontrar uma boa aproximação
//   while (alto - baixo > precisao) {
//     meio = (baixo + alto) / 2;

//     if (meio * meio > num) {
//       alto = meio; // Se o quadrado de 'meio' for maior que o número, diminui o intervalo
//     } else {
//       baixo = meio; // Se for menor, aumenta o intervalo
//     }
//   }

//   return meio; // Aproximação final da raiz quadrada
// };

// console.log(resultado(16));
