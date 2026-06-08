// cidadão de primeira classe = funções armanezadas dentro de vairáveis, funções callback, funções retornadas por outras.

//função anonima
let armazenaFuncao = function () {
  console.log("Olá, sou uma função anonima dentro de uma variável");
};

armazenaFuncao();

//função nomeada
let soma = function somaFuncao(a, b) {
  console.log(a + b);
};

soma(5, 10);

//funcao arrowfunction
let multiplicar = (a, b) => console.log(a * b);
multiplicar(5, 10);

//setTimeout()
setTimeout(function () {
  multiplicar(5, 10);
}, 4000); //5000

setTimeout(function () {
  multiplicar(3, 20);
}, 3000); //5000

setTimeout(function () {
  multiplicar(5, 2);
}, 5000); //5000
