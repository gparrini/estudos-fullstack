// NaN  (Not A Number) - Mais frequência de resultar
let notANumber = NaN;
let notANumber2 = 0 / 0;
let string = Number("Olá");
let mensagem = "Olá Impressionador!";

// console.log(notANumber, notANumber2, string);

//Verifica se o valor passado é NaN
console.log(Number.isNaN(notANumber));
console.log(Number.isNaN(notANumber2));
console.log(Number.isNaN(string));
console.log(Number.isNaN(mensagem)); // falso false - porque não verifica se é número - verifica se o valor é NaN
//isNaN() não verifica se o valor original é NaN; em vez disso, ele verifica se o
//resultado da conversão do valor é NaN.
// A string não é NaN após a conversão, mas sim um número (NaN).

console.log(Number.isNaN(42)); // são números - false
console.log(Number.isNaN(42.74637)); // são números - false

// Infinity /  -Infinity
let infinito = Infinity; // -Infinity
let infinito2 = -1 / 0; // -1/0;
let multiplicacao = Number.MAX_VALUE * 2;

// console.log(infinito, infinito2, multiplicacao);

console.log(Number.isFinite(infinito)); //false
console.log(Number.isFinite(infinito2)); //false
console.log(Number.isFinite(multiplicacao)); //false
console.log(Number.isFinite(42)); // true
console.log(Number.isFinite("Olá")); // verifica se o valor finito ou não - Falso false
console.log(Number.isFinite(notANumber));
