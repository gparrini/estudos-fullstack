const faturamento = [
  150_000, 110_000, 90_000, 70_000, 100_000, 120_000, 130_000, 95_000, 120_000,
  130_000, 120_000, 165_000,
];

//Map

const faturamentoEmReais = faturamento.map(
  (valorFaturamentoMensal) => 4.79 * valorFaturamentoMensal
);

console.log(faturamentoEmReais);

//Filter
const faturamentoMaiorDoQueDesejado = faturamento.filter(
  (valorFaturamentoMensal) => valorFaturamentoMensal >= 130_000
);

console.log(faturamentoMaiorDoQueDesejado);
