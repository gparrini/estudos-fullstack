// setTimeout() - função nativa que permite exectuar um bloco de código depois de um intervalo de tempo determinado (milissegundos).

// setTimeout(callback(função), tempo)

console.log("Inicio do programa");

setTimeout(function () {
  console.log("Olá, mundo assíncrono!");
}, 2000);

console.log("Aguardando 1 seg");
console.log("Aguardando 2 seg");

setTimeout(function () {
  console.log("Primeiro setTimeout");
}, 1000);

console.log("Fim do programa");
