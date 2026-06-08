// Number - valores numéricos - inteiros e ponto flutuante
let inteiro = 42;
let numeroPontoFlutuante = 3.4567;
let numeroPontoFlutuante2 = 3.4537;

// Verificar se o número é um inteiro - retornar booleano
console.log(Number.isInteger(inteiro)); //true
console.log(Number.isInteger(numeroPontoFlutuante)); // false

//Formatar número de acordo com as casas decimais
console.log(numeroPontoFlutuante.toFixed(2)); // digitos = casas decimais
console.log(numeroPontoFlutuante2.toFixed(2));
console.log(numeroPontoFlutuante.toFixed()); // padrão = 0 casas decimais

//Formatar número precisão específica
console.log(numeroPontoFlutuante.toPrecision(4)); // números dígitos que o numeral irá conter
console.log(inteiro.toPrecision(1));
// O número 42 é arredondado e exibido em notação científica como 4e+1
//(ou seja, 4 vezes 10 elevado a 1, que é 40).
console.log(inteiro.toPrecision(2)); // 42
console.log(inteiro.toPrecision(3)); // 42.0
