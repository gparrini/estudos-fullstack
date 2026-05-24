//  Crie uma função que receba um array de despesas e retorne um novo array contendo "Alto Gasto"
// para despesas maiores que 100 e "Gasto Controlado" para despesas iguais ou menores que 100.
// Função: controleDespesas
// Entrada: // const despesas = [150, 80, 200, 60, 120];
// const resultado = controleDespesas(despesas);

//  Saída: // ["Alto Gasto", "Gasto Controlado", "Alto Gasto", "Gasto Controlado", "Alto Gasto"]

// Alto Gasto > 100 ------ Gasto Controlado <= 100
const despesas = [150, 80, 200, 60, 120];

function controleDespesas(despesas) {
  const resultado = [];
  for (let despesa of despesas) {
    if (despesa > 100) {
      resultado.push("Alto Gasto");
    } else {
      resultado.push("Gasto Controlado");
    }
  }
  return resultado;
}

console.log(controleDespesas(despesas));
