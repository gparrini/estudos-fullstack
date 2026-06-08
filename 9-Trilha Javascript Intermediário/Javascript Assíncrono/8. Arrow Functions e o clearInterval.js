// Arrow Function
//  () => {}

let minhaFuncao = () => console.log("Olá sou uma arrow function");
minhaFuncao();

// setTimeout(() => {
//   console.log("Estou dentro do setTimeout utilizando arrow function");
// }, 2000);

let contador = 5;

let intervalo = setInterval(() => {
  console.log("Contador está no número " + contador);
  contador--;

  //Quando o contador chegar a 0 - precisa parar o intervalo
  if (contador < 0) {
    clearInterval(intervalo);
    console.log("Contagem finalizada!");
  }
}, 1000);

console.log(intervalo);

let intervalo2 = setInterval(() => {
  console.log("Este não tem parada");
  if (contador === 3) {
    clearInterval(intervalo2);
  }
}, 1000);

console.log(intervalo2);
