// Função de adição / soma
function add(a, b) {
  return a + b;
}

// Função de subtração
function substract(a, b) {
  return a - b;
}

// Exportando as funções  - CommonJs
module.exports = {
  add,
  substract,
};

//Desafio Extra - Exportar condicionalmente
if (process.env.NODE_ENV === "development") {
  function mutiply(a, b) {
    return a * b;
  }
  module.exports.mutiply = mutiply;
}
