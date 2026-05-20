// =================================================================
// 1. INTEIROS, FLUTUANTES E VALIDAÇÃO
// =================================================================

// No JavaScript, todo número pertence à mesma categoria (Number),
// seja ele um número inteiro ou quebrado (ponto flutuante).
let inteiro = 42;
let numeroPontoFlutuante = 3.4567;
let numeroPontoFlutuante2 = 3.4537;

// Number.isInteger(valor): Pergunta ao JS "Esse número é inteiro?" (Retorna true ou false)
console.log(Number.isInteger(inteiro)); // true
console.log(Number.isInteger(numeroPontoFlutuante)); // false


// =================================================================
// 2. FORMATANDO E ARREDONDANDO NÚMEROS
// =================================================================

// toFixed(casas): Trava o número em uma quantidade específica de CASAS DECIMAIS.
// Importante: Ele arredonda o último número e o resultado vira uma STRING!
console.log(numeroPontoFlutuante.toFixed(2));  // "3.46" (arredondou para cima)
console.log(numeroPontoFlutuante2.toFixed(2)); // "3.45" (arredondou para baixo)
console.log(numeroPontoFlutuante.toFixed());   // "3" (padrão é 0 casas decimais)

// toPrecision(digitos): Define a quantidade TOTAL de dígitos do número (antes e depois da vírgula).
console.log(numeroPontoFlutuante.toPrecision(4)); // "3.457" (4 dígitos no total)

// Se você pedir menos dígitos do que a parte inteira precisa, ele usa notação científica.
console.log(inteiro.toPrecision(1)); // "4e+1" (4 vezes 10 elevado a 1 = 40)
console.log(inteiro.toPrecision(2)); // "42"
console.log(inteiro.toPrecision(3)); // "42.0"


// =================================================================
// 3. CONVERSÃO: DE STRING PARA NÚMERO E VICE-VERSA
// =================================================================

let flutuanteString = "32.7659";
let inteiroString = "42";

console.log(typeof flutuanteString); // "string"

// Number.parseFloat(): Extrai o NÚMERO com casas decimais de dentro de um texto.
console.log(typeof Number.parseFloat(flutuanteString)); // "number"
console.log(Number.parseFloat(inteiroString)); // 42

// Number.parseInt(valor, base): Extrai apenas a parte INTEIRA (corta as casas decimais).
// A 'base' diz ao JS como ler o número (10 = decimal comum, 16 = hexadecimal).
console.log(Number.parseInt(flutuanteString, 10)); // 32
console.log(Number.parseInt(inteiroString, 10));   // 42

// Encadeamento de métodos (Misto de converter e depois formatar):
console.log(Number.parseFloat(flutuanteString).toFixed(2)); // "32.77"

// numero.toString(base): Converte um número para texto.
// Superpoder: você pode mudar a base numérica na hora de converter!
let numero = 42; 
console.log(numero.toString());   // "42" (base 10 - padrão)
console.log(numero.toString(2));  // "101010" (base 2 - Binário, a linguagem das máquinas)
console.log(numero.toString(8));  // "52" (base 8 - Octal)


// =================================================================
// 4. NaN (NOT A NUMBER - NÃO É UM NÚMERO)
// =================================================================

// NaN acontece quando uma operação matemática falha tragicamente no JavaScript.
let notANumber = NaN;
let notANumber2 = 0 / 0; // Matematicamente indefinido = NaN
let stringParaNumero = Number("Olá"); // Tentar forçar letras a virarem números = NaN
let mensagem = "Olá Impressionador!";

// Number.isNaN(valor): Verifica de forma RIGOROSA se o valor é exatamente o erro 'NaN'.
console.log(Number.isNaN(notANumber));  // true
console.log(Number.isNaN(notANumber2)); // true

// ⚠️ ATENÇÃO À PEGADINHA:
console.log(Number.isNaN(mensagem)); // FALSE!
// Por que false? Porque a variável 'mensagem' é uma String normal. Ela não é do tipo numérico.
// O método estrito 'Number.isNaN' só dá 'true' se a variável já estiver corrompida com o valor 'NaN'.

console.log(Number.isNaN(42)); // false (é um número válido)


// =================================================================
// 5. INFINITY (INFINITO) E LIMITES
// =================================================================

// O JS tem um limite máximo de cálculo. Se ultrapassar, vira Infinito.
let infinito = Infinity; 
let infinito2 = -1 / 0; // Divisão por zero no JS não dá erro, dá Infinito!
let multiplicacao = Number.MAX_VALUE * 2; // Estourou o limite = Infinity

// Number.isFinite(valor): Pergunta "Isso é um número real e calculável?"
console.log(Number.isFinite(infinito)); // false
console.log(Number.isFinite(infinito2)); // false
console.log(Number.isFinite(multiplicacao)); // false
console.log(Number.isFinite(42)); // TRUE! 42 é um número normal.
console.log(Number.isFinite("Olá")); // false (texto não é finito, porque nem número é)
console.log(Number.isFinite(notANumber)); // false (NaN não é finito)