//Simular ambiente
// process.env.NODE_ENV = "production";
process.env.NODE_ENV = "development";

// Importar as funções do arquivo mathOperations.js
const mathOperations = require("./mathOperations");

//Simulação de input/entrada do usuário
const a = 10;
const b = 5;

//Usando as funções importadas para calcular
const sum = mathOperations.add(a, b);
const difference = mathOperations.substract(a, b);

//Exibir os resultados
console.log(`Soma de ${a} e ${b}: ${sum}`);
console.log(`Substração de ${a} e ${b}: ${difference}`);

// Se a função multiply estiver disponível, use-a
if (mathOperations.mutiply) {
  const product = mathOperations.mutiply(a, b);
  console.log(`Multiplacação de ${a} e ${b}: ${product}`);
}
