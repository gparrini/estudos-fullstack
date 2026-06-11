const medicamentos = [
  { nome: "Paracetamol", estoque: 150, preco: 5.99 },
  { nome: "Amoxicilina", estoque: 80, preco: 9.5 },
  { nome: "Ibuprofeno", estoque: 200, preco: 7.8 },
];

// Exercício 4: Atualizando Estoque de Produtos
// ❖ Utilize o forEach para iterar sobre o array de medicamentos.
// ❖ Para cada medicamento, adicione um item à lista que mostre o nome do medicamento e
// a quantidade em estoque.

const listaMedicamentos = document.getElementById("lista-medicamentos");
medicamentos.forEach(function (medicamento) {
  const li = document.createElement("li");
  li.textContent = `${medicamento.nome} - Estoque: ${medicamento.estoque}`;
  listaMedicamentos.appendChild(li);
});

// Exercício 5: Exibindo Preços dos Medicamentos
// ❖ Adicione uma nova lista não ordenada à sua página HTML para exibir os preços.
// ❖ Utilize o forEach para percorrer o array de medicamentos novamente.
// ❖ Para cada medicamento, adicione um item à nova lista que mostre o nome do
// medicamento e seu preço.
const listaPrecos = document.getElementById("precos-medicamentos");

medicamentos.forEach(function (medicamento) {
  const li = document.createElement("li");
  li.textContent = `${medicamento.nome} - R$ ${medicamento.preco.toFixed(2)}`;
  listaPrecos.appendChild(li);
});

// Exercício 6: Exibindo Medicamentos em falta
// ❖ Crie um espaço na sua página HTML onde os nomes dos medicamentos em falta serão
// exibidos.
// ❖ Utilize o forEach para iterar sobre o array de medicamentos.
// ❖ Para cada medicamento, verifique se o estoque está zerado e, se estiver, armazene o
// nome do medicamento.
// ❖ No final, exiba a quantidade de medicamentos em falta e liste seus nomes na interface
let medicamentoEmFalta = 0;

const nomesMedicamentosEmFalta = []; // Araay para armazenar os nomes

medicamentos.forEach(function (medicamento) {
  if (medicamento.estoque === 0) {
    medicamentoEmFalta++;
    nomesMedicamentosEmFalta.push(medicamento.nome); // Adicionar os nomes ao Array
  }

  const resultado = document.getElementById("resultado-falta");
  resultado.textContent = `Medicamentos em Falta: ${medicamentoEmFalta}`;

  const resultaNomesFalta = document.getElementById("resultado-nomes-falta");
  if (medicamentoEmFalta > 0) {
    resultaNomesFalta.textContent = `Medicamentos em falta: 
    ${nomesMedicamentosEmFalta.join(", ")}`;
  } else {
    resultaNomesFalta.textContent = `Todos os medicamentos estão disponíveis!`;
  }
});
