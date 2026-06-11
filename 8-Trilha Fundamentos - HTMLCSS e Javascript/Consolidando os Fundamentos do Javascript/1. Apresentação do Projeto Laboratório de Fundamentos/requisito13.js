//  Crie uma função que receba duas distâncias (distancia1 e distancia2) e retorne
// qual pessoa está mais próxima, indicando "Pessoa 1" se a primeira distância for menor,
// "Pessoa 2" se a segunda distância for menor, ou "Ambos estão a mesma distância" se as
// distâncias forem iguais.

// Função: calcularDistancia
// Entrada: // calcularDistancia(10, 15);
//  calcularDistancia(20, 15);
//  calcularDistancia(30, 30);

//  Saída: “Pessoa 1” ___________  "Pessoa 2" ____________ "Ambos estão a mesma distância"

// distância1 for menor => Pessoa 1 ------ distancia2 for menor => Pessoa2

function calcularDistancia(distancia1, distancia2) {
  if (distancia1 < distancia2) {
    return "Pessoa 1";
  } else if (distancia1 > distancia2) {
    // distancia2 < distancia1
    return "Pessoa 2";
  } else {
    return "Ambos estão a mesma distância";
  }
}

console.log(calcularDistancia(10, 15)); // Pessoa 1
console.log(calcularDistancia(20, 15)); // Pessoa 2
console.log(calcularDistancia(30, 30));
// Ambos estão a mesma distância
