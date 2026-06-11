const pacotes = [
  { destino: "Paris", preco: 3500, vagasDisponiveis: true },
  { destino: "Nova York", preco: 4200, vagasDisponiveis: false },
  { destino: "São Paulo", preco: 1500, vagasDisponiveis: true },
  { destino: "Egito", preco: 2500, vagasDisponiveis: true },
  { destino: "Orlando", preco: 5500, vagasDisponiveis: false },
  { destino: "Rio de Janeiro", preco: 1500, vagasDisponiveis: true },
];

// Sintaxe  array.forEach(function(elemento, indice, array));

// Exercício 1: Você possui uma lista de pacotes de viagem que contém informações sobre o
// destino e o preço. Utilize o forEach para percorrer essa lista e exibir no terminal o nome de
// cada destino acompanhado do seu respectivo preço.

console.log("Pacote de Viagem:");

pacotes.forEach(function (pacote) {
  console.log(`${pacote.destino} - R$ ${pacote.preco}`);
});

// Exercício 2: Você precisa informar a disponibilidade de vagas para cada pacote. Para isso,
// utilize o forEach para percorrer a mesma lista e exibir no terminal o nome de cada destino,
// seguido da informação de se há vagas disponíveis ou se estão esgotadas.

console.log("\nDestinos Disponíveis");
pacotes.forEach((pacote) => {
  const disponibilidade = pacote.vagasDisponiveis
    ? "Vagas Disponíveis"
    : "Vagas Esgotadas";

  console.log(`${pacote.destino} - ${disponibilidade}`);
});

// Exercício 3: Conte quantos destinos têm vagas disponíveis. Utilize o forEach para verificar a
// disponibilidade de cada pacote e armazene a contagem. Exiba no terminal o total de destinos e
// quais destinos possuem vagas disponíveis.

let destinoComVagas = 0;
let destinoDisponivel = []; // Array para armazenar os destinos com vagas disponíveis.

pacotes.forEach(function (pacote) {
  if (pacote.vagasDisponiveis) {
    destinoComVagas++; // incrementar valor 1
    destinoDisponivel.push(pacote.destino); // Adiciona o destino ao array
  }
});

console.log(`\nDestinos com vagas disponíveis: ${destinoComVagas}`);
console.log(`Destinos: ${destinoDisponivel.join(", ")}`); // exibir os destinos
