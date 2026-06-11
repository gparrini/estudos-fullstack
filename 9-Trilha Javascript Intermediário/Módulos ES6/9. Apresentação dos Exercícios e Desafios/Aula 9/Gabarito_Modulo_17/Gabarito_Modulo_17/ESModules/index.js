//Simular ambiente
process.env.NODE_ENV = "production";
// process.env.NODE_ENV = "development";

//Importação das funções - ES Modules
// import * as mathOperations from "./mathOperations.js";
import math from "./mathOperations.js";
import { multiply } from "./mathOperations.js";

//Simulação de input/entrada do usuário
const a = 10;
const b = 5;

//Usando as funções importadas para calcular
const sum = math.add(a, b);
const difference = math.substract(a, b);
const product = multiply(a, b);

//Exibir os resultados
console.log(`Soma de ${a} e ${b}: ${sum}`);
console.log(`Substração de ${a} e ${b}: ${difference}`);
console.log(`Multiplicação de ${a} e ${b}: ${product}`);
