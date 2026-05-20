// =================================================================
// 1. CONSTANTES MATEMÁTICAS E CÁLCULOS BÁSICOS
// =================================================================

// O objeto Math possui propriedades que guardam valores constantes famosos.
// Math.PI guarda o valor de Pi (3.14159...), muito usado para calcular circunferências.
const PI = Math.PI;
console.log(PI);

// Math.sqrt(numero): Calcula a Raiz Quadrada (Square Root) de um número.
const raizQuadrada = Math.sqrt(16); // 4
console.log(raizQuadrada);

// Math.pow(base, expoente): Calcula a Potência (Power).
const potencia = Math.pow(2, 8); // 2 elevado a 8 = 256
console.log(potencia);


// =================================================================
// 2. POR QUE USAR O OBJETO MATH? (Reinventando a roda)
// =================================================================
// Os códigos comentados abaixo mostram como você teria que escrever
// MUITAS linhas de código complexo (usando loops e matemática avançada)
// para calcular uma potência ou uma raiz quadrada na mão.
// O objeto 'Math' serve justamente para abstrair tudo isso em uma única linha!

// --- EXEMPLO DA POTÊNCIA MANUAL ---
// const potenciaFuncao = function potencia(base, expoente) {
//   let resultado = 1;
//   for (let i = 0; i < expoente; i++) {
//     resultado *= base; 
//   }
//   return resultado;
// };
// console.log(potenciaFuncao(2, 8)); // 256 (2 * 2 * 2... oito vezes)

// --- EXEMPLO DA RAIZ QUADRADA MANUAL ---
// (Perceba como a lógica matemática para achar a raiz manualmente é difícil!)
// ... [Código de aproximação mantido no seu original] ...


// =================================================================
// 3. ARREDONDAMENTOS (ROUNDING)
// =================================================================

// Math.round(numero): Arredonda para o número inteiro mais próximo.
// Regra padrão da matemática: .5 ou mais sobe; .4 ou menos desce.
let numero = 3.45; 
let numero2 = 3.55; 

console.log(Math.round(numero));  // 3 (pois 45 é menor que 50, arredonda para baixo)
console.log(Math.round(numero2)); // 4 (pois 55 é maior que 50, arredonda para cima)

// Nota sobre o parseInt (que você deixou comentado):
// O parseInt(3.99) daria 3. Ele não arredonda, ele simplesmente "corta" as casas decimais.


// =================================================================
// 4. NÚMEROS ALEATÓRIOS (RANDOM)
// =================================================================

// Math.random(): É a máquina de sorteios do JS. 
// Ele SEMPRE retorna um número quebrado entre 0.000...0 e 0.999...9 (nunca chega a 1 exato).


// Para conseguir números maiores, nós MULTIPLICAMOS esse resultado.
// No seu código abaixo, ocorrem 3 passos ao mesmo tempo:
// 1º: Math.random() * 100 -> Sorteia um número de 0.00 a 99.99...
// 2º: .toFixed(2) -> Corta o número para ter apenas 2 casas decimais (mas transforma em texto!).
// 3º: Number.parseFloat(...) -> Pega o texto gerado e transforma de volta em número real.

const aleatorio = Number.parseFloat((Math.random() * 100).toFixed(2));
console.log(aleatorio); // O resultado será um número aleatório entre 0.00 e 99.99, com exatamente 2 casas decimais.


// =================================================================
// 5. MÁXIMOS E MÍNIMOS & O SPREAD OPERATOR (...)
// =================================================================

// Math.min(): Retorna o menor número passado nos parênteses.
// Math.max(): Retorna o maior número passado nos parênteses.
console.log(Math.min(2, 45, 6, 87, 43)); // 2
console.log(Math.max(2, 45, 6, 87, 43)); // 87

let lista = [2, 45, 6, 87, 43, 101];

// console.log(Math.min([2, 45, 6, 87, 43])); // ERRO! (Retorna NaN)
// Por que dá erro? Porque o Math.min espera receber números soltos separados por vírgula.
// Quando você passa uma Lista (Array) inteira, ele não sabe o que fazer com ela.

// SOLUÇÃO: O OPERADOR SPREAD (Os três pontinhos ...)
// O spread "espalha" ou "desempacota" os itens da lista, tirando eles dos colchetes
// e entregando soltos para a função, exatamente do jeito que o Math.min/max gosta!


console.log(Math.min(...lista)); // Funciona! Encontra o 2
console.log(Math.max(...lista)); // Funciona! Encontra o 101