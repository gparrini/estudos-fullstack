// Requisito 1: Simulação de Investimento ->  Função: simularInvestimento

function simularInvestimento(valorInicial, taxaMensal, meses) {
  let saldoFinal = valorInicial;

  for (let index = 1; index <= meses; index++) {
    saldoFinal += saldoFinal * (taxaMensal / 100); //Rendimento composto
  }

  return saldoFinal.toFixed(2);
}

// console.log(simularInvestimento(valorInicial, taxaMensal, meses)); // 1195.62

// Requisito 2: Gerenciamento de Despesas -> Função: gerenciarDespesas
function gerenciarDespesas(despesas) {
  let totalDespesas = 0;
  for (let categoria in despesas) {
    totalDespesas += despesas[categoria]; // Somar o valor de cada categoria
  }
  return totalDespesas;
}

// console.log(gerenciarDespesas(despesas)); //2050

// Requisito 3: Obtenção do Mês Atual -. Função: obterMesAtual
function obterMesAtual() {
  const meses = [
    "Janeiro", // 0
    "Fevereiro", // 1
    "Março", // 2
    "Abril", // ...
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro", // indice 9
    "Novembro",
    "Dezembro",
  ];

  const dataAtual = new Date(); // Criar uma instância e podemos utilizar os métodos desse objeto
  //   console.log(dataAtual.getMonth()); // 0 - 11
  return meses[dataAtual.getMonth()]; // Retorna o mês atual - elemento do indice retornando a string correta
}

// console.log(obterMesAtual());

// Requisito 4: Geração de Relatório Financeiro -> Função: gerarRelatorio

function gerarRelatorio(
  investimentoInicial,
  taxa,
  meses,
  despesas,
  metaInvestimento,
  metaOrcamento
) {
  const saldoInvestimento = simularInvestimento(
    investimentoInicial,
    taxa,
    meses
  );
  const totalDespesas = gerenciarDespesas(despesas);
  const mesAtual = obterMesAtual();
  console.log("=== Relatório Financeiro ===");
  console.log(`Mês: ${mesAtual}`);
  console.log(`Saldo final do investimento: R$ ${saldoInvestimento}`);
  console.log(`Total de despesas: R$ ${totalDespesas}`);

  //Orçamento
  const economia = metaOrcamento - totalDespesas;
  if (economia > 0) {
    console.log(`Parabéns! Você economizou R$ ${economia}`);
  } else {
    console.log(`Você excedeu seu orçamento em R$ ${Math.abs(economia)}`);
  }

  //Investimento
  if (saldoInvestimento >= metaInvestimento) {
    console.log("Meta de investimento atingida!");
  } else {
    console.log("Você não atingiu a meta de investimento");
  }

  //Resumo das despesas
  console.log("=== Resumo das Despesas ===");
  for (const categoria in despesas) {
    console.log(
      `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$ ${
        despesas[categoria]
      }`
    );
  }
}

//Requisito 5: Estrutura de Dados para Despesas
const despesas = {
  condominio: 800,
  escola: 500,
  academia: 150,
  agua: 60,
  luz: 120,
  lazer: 300,
};

// Requisito 6: Entradas e Configurações do Investimento
const valorInicial = 3000; // Valor inicial investido
const taxaMensal = 1.3; // Taxa de rendimento mensal em %
const meses = 12; // Duração do investimento
const metaInvestimento = 2000; // Meta para o saldo final do investimento
const metaOrcamento = 1500; // Meta de orçamento mensal

// Requisito 7: Execução do Relatório
gerarRelatorio(
  valorInicial,
  taxaMensal,
  meses,
  despesas,
  metaInvestimento,
  metaOrcamento
);
