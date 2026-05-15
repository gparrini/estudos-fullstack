let ligado = true;    // Representa um estado ATIVO (sim, verdadeiro, ligado)
let desligado = false; // Representa um estado INATIVO (não, falso, desligado)

// No JavaScript, quando comparamos com números:
// true é convertido para 1
// false é convertido para 0

// Por isso, se você fizesse:
// console.log(true == 1);  -> Retornaria true
// console.log(false == 0); -> Retornaria true

let nome = "Paulo";
// A função Boolean() checa se o valor dentro dela é "confiável" (truthy) ou "vazio" (falsy).
console.log(Boolean(nome)); // Retorna: true

let numero = 0;
console.log(Boolean(numero)); // Retorna: false
// Valores "falsy" comuns: 0, "", null, undefined, NaN, false
// Todos os outros valores são "truthy", ou seja, considerados verdadeiros em contextos booleanos.
