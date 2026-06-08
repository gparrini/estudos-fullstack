let flutuanteString = "32.7659";
let inteiroString = "42";

console.log(typeof flutuanteString);

//Converter o valor (geralmente string) para um número
console.log(typeof Number.parseFloat(flutuanteString));
console.log(Number.parseFloat(inteiroString));

// Converter um inteiro para uma String - opcional - base numérica
let numero = 42; // base decimal
console.log(numero.toString()); // base decimal 42
console.log(numero.toString(10)); // base decimal 42
console.log(numero.toString(2)); //base binária 101010
console.log(numero.toString(8)); // base octal 52
// 2 - 36

//Converter uma string para um número inteiro, considerando a base numérica (opcional)
console.log(Number.parseInt(flutuanteString, 16));
console.log(Number.parseInt(inteiroString));

console.log(Number.parseFloat(flutuanteString).toFixed(2));
