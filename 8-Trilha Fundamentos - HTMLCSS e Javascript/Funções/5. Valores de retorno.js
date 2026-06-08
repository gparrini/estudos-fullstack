// Retorno de uma função

let pedido = {
  id: 1234,
  nome: "João",
  email: "joao@example.com",
  lanche: 12,
  batataFrita: 6,
  suco: 4,
};

function enviarNotificacao(nome, idPedido, email) {
  // Simular o envio de um email
  console.log(
    `Enviando email para ${email} confirmando o pedido do número ${idPedido}`
  );
  console.log(`Mensagem: ${nome} pedido confirmado`);
  //Não possui retorno explícito
}

// enviarNotificacao(pedido.nome, pedido.id, pedido.email);

// Função principal que irá calcular e retornar o valor do pedido

function processarPedido(id, item1, item2, item3) {
  let totalPedido = item1 + item2 + item3;
  console.log("Pedido: " + id + " Processando");
  return totalPedido; // encerrou a nossa função
  // console.log("O total do pedido é: " + totalPedido); - Esta linha de código Não será lida
}

let retornoDaFuncao = processarPedido(
  pedido.id,
  pedido.lanche,
  pedido.batataFrita,
  pedido.suco
);

console.log(retornoDaFuncao);
