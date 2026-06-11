// Função de adição / soma
function add(a, b) {
  return a + b;
}

// Função de subtração
function substract(a, b) {
  return a - b;
}

// export { add, substract, multiply };
// export default { add, substract, multiply };
// const math = { add, substract, multiply };
const math = { add, substract };
export default math;

// Função de multiplicação
export function multiply(a, b) {
  //Verificação de condição
  if (process.env.NODE_ENV === "development") {
    console.log("Estamos no ambiente de desenvolvimento");
    return a * b;
  } else {
    let error = "Estamos em outro ambiente! Não podemos utilizar a função";
    return error;
  }
}
