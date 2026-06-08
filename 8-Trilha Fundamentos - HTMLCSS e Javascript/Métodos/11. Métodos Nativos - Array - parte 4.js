let frutas = ["maça", "melão", "manga", "kiwi"];

console.log(frutas.includes("manga"));
console.log(frutas.includes(50));

console.log(
  frutas.every(function (fruta) {
    return fruta.includes("ma");
  })
); // todos os elementos
console.log(
  frutas.some(function (frutas) {
    return frutas.includes("k");
  })
); // algum elemento

console.log(frutas.join("outra palavra"));
