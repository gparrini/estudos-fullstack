// ==========================================
// SINTAXE BÁSICA
// function nomeFunçao(parametros) { instrução }
// ==========================================

// 1. Função sem parâmetros e sem retorno
// Útil para executar blocos de código fixos que não precisam de dados externos.
function enviarMensagem() {
  console.log("Para continuar você precisa informar o seu nome para cadastro");
}

// Chamada da função: Executa o bloco de código acima
enviarMensagem();


// 2. Função com parâmetros
// "nome" e "sobrenome" são parâmetros. Pense neles como gavetas vazias 
// que só existem aqui dentro e que vão receber dados na hora que a função for chamada.
function cadastrar(nome, sobrenome) {
  // Usamos Template Literals (`... ${variavel}`) para juntar texto e variáveis de forma simples
  console.log(`Olá ${nome} ${sobrenome}, você foi cadastrado com sucesso`);
}

// Para testar, basta descomentar a linha abaixo. 
// "Daniel" e "Porto" são os ARGUMENTOS (os dados reais que preenchem as gavetas).
// cadastrar("Daniel", "Porto");


// 3. Função com parâmetros e com RETORNO
// O 'return' é a palavra-chave que faz a função processar algo e "devolver" o resultado 
// para quem chamou a função de fora.
function banco(deposito, saque) {
  let saldo = deposito - saque;
  return saldo; // Envia o valor calculado para fora da função
}

// O console.log aqui pegaria o que foi "retornado" (940) e exibiria na tela
// console.log(banco(1000, 60));


// 4. Função Principal (main)
// É uma convenção em programação criar uma função principal para organizar a ordem de execução do sistema.
function main() {
  enviarMensagem(); // Executa a mensagem inicial
  
  cadastrar("Daniel", "Porto"); // Executa o cadastro
  
  // ⚠️ AJUSTE FEITO AQUI: 
  // No seu código original estava 'let banco = banco(...)'. Isso dá erro porque o JS se confunde 
  // tentando criar uma variável com o mesmo nome da função. Mudamos o nome da variável para 'saldoAtual'.
  let saldoAtual = banco(10000, 780); 
  
  // ⚠️ AJUSTE FEITO AQUI:
  // Mudamos de ${saldo} para ${saldoAtual}. A variável 'saldo' só existia dentro da função banco() 
  // (escopo local). Para usar o resultado aqui na main, precisamos usar a variável que capturou o retorno.
  console.log(`O saldo atual da sua conta é de ${saldoAtual} reais`);
}

// Executa a função principal, que por sua vez dispara todas as outras na ordem correta
main();