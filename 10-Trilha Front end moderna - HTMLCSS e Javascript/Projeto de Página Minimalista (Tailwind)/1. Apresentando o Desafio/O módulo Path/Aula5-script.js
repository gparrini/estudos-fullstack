// import { selectBestCountry as bestCountry } from './script3.js';

console.log("Olá, boa noite!");

function addFiveNumbers(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

function selectBestCountry() {
  return "Brasil";
}

globalThis.console.log("Olá, feliz ano novo!");

console.log(addFiveNumbers(1, 2, 3, 4, 5));

console.log(module.filename);

const path = require("node:path");
const pathObj = path.parse(module.filename);

console.log(pathObj);
// const script3 = require("./script3");
// console.log(script3.bestCountry());

// console.log(bestCountry());
