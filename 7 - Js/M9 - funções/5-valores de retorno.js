// =================================================================
// TRABALHANDO COM OBJETOS E RETORNOS
// =================================================================

// Criando um Objeto (pedido). 
// Ele agrupa várias características (propriedades) de uma mesma coisa em um só lugar.
let pedido = {
  id: 1234,
  nome: "João",
  email: "joao@example.com",
  lanche: 12,
  batataFrita: 6,
  suco: 4,
};

// 1. Função sem retorno explícito (Efeito Colateral)
// Ela serve apenas para executar ações externas (como imprimir no console ou mandar um e-mail).
// Se tentássemos guardar o resultado dela em uma variável, o valor seria 'undefined'.
function enviarNotificacao(nome, idPedido, email) {
  console.log(
    `Enviando email para ${email} confirmando o pedido de número ${idPedido}`
  );
  console.log(`Mensagem: ${nome}, pedido confirmado!`);
  // não possui retorno explícito
}
// Para testar a função acima, usamos a notação de ponto (pedido.propriedade) 
enviarNotificacao(pedido.nome, pedido.id, pedido.email);
// para acessar os dados de dentro do objeto e passá-los como argumentos:
// enviarNotificacao(pedido.nome, pedido.id, pedido.email);

// MULTIPLOS PARÂMETROS
// 2. Função com retorno e o conceito de "Código Inalcançável"
function processarPedido(id, item1, item2, item3) {
  let totalPedido = item1 + item2 + item3;
  console.log("Pedido: " + id + " Processando...");
  
  return totalPedido; // 🚪 PORTA DE SAÍDA: A função entrega o valor e encerra IMEDIATAMENTE aqui.
  
  // ⛔ CÓDIGO MORTO / INALCANÇÁVEL:
  // Qualquer linha escrita dentro da função APÓS o 'return' será completamente ignorada pelo JavaScript.
  // console.log("O total do pedido é: " + totalPedido); 
}

// Chamamos a função passando os valores numéricos do objeto 'pedido'.
// A variável 'retornoDaFuncao' vai CAPTURAR o valor de 'totalPedido' que foi cuspido pelo return.
let retornoDaFuncao = processarPedido(
  pedido.id,
  pedido.lanche,
  pedido.batataFrita,
  pedido.suco
);

// Exibe o valor capturado (12 + 6 + 4 = 22)
console.log(`O valor total a pagar é: R$ ${retornoDaFuncao}`);


/*
================================================================
📝 RESUMO DO APRENDIZADO: OBJETOS, ESCOPO E RETORNO
================================================================

1. ACESSANDO OBJETOS EM FUNÇÕES: 
   - Usamos a "notação de ponto" (ex: pedido.lanche) para extrair valores específicos 
     de um objeto e enviá-los como argumentos para uma função.

2. FUNÇÕES SEM RETORNO (VOID):
   - Executam instruções (como console.log), mas não devolvem dados para o código principal. 
     Seu ciclo de vida termina na última linha de instrução ou na chave de fechamento '}'.

3. O PODER DO 'RETURN':
   - Tem dupla função: interromper a execução da função na mesma hora e enviar 
     um valor de volta para quem a chamou.

4. CÓDIGO INALCANÇÁVEL (UNREACHABLE CODE):
   - O 'return' funciona como um ponto final. Colocar códigos abaixo dele dentro 
     da mesma função é um erro de lógica, pois o interpretador do JavaScript nunca chegará até lá.
*/