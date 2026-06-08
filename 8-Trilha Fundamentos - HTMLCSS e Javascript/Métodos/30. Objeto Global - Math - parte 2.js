// Math.round(x) - Arredonda x para o inteiro mais próximo
let numero = 3.45; // 4 para baixo
let numero2 = 3.55; // 5 para cima

console.log(Math.round(numero));
console.log(Math.round(numero2));

// console.log(parseInt(numero));
// console.log(parseInt(numero2));

//Math.random() - Retorna um número pseudo-aleatório entre 0 e 1.
// const aleatorio = Math.random() * 100;
// console.log(parseFloat(aleatorio.toFixed(2)));

const aleatorio = Number.parseFloat((Math.random() * 100).toFixed(2));
console.log(aleatorio);
