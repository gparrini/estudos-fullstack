// Função Anônima - ela não possui nome = function(parametros) {instruções}

let saudacao = function () {
  console.log("Olá sou uma função anônima");
};

saudacao();

(function () {
  console.log("Olá sou uma função que não está dentro de nenhum lugar");
})();

// setTimeout
setTimeout(function () {
  console.log("Olá sou uma função dentro do setTimeout");
}, 2000);

// setInterval
setInterval(saudacao, 5000);
