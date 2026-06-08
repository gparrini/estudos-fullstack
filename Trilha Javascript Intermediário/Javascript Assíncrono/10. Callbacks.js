// Função que simula operacão assíncrona
function operacaoAssincrona(callback) {
  setTimeout(() => {
    console.log("Operação concluída!");
    // Chamando o callback e passando dados para ele
    callback("Dados da operação");
  }, 2000);
}

//Função callback que será chamada quando a operação for concluida
function meuCallback(dados) {
  console.log(`Recebido no callback: ${dados}`);
}

//Chamando a função
// operacaoAssincrona(meuCallback);

// ______________________________________________________________________________

function operacaoComErro(funcao) {
  setTimeout(() => {
    const sucesso = Math.random() > 0.5; // Simular 50% chance de erro
    console.log(sucesso);
    if (sucesso) {
      funcao(null, "Operação bem-sucedida");
    } else {
      funcao("Houve um erro na operação", null);
    }
  }, 2000);
}

//função callback manipular erro e sucesso
function meuCallbackComErro(erro, resultado) {
  if (erro) {
    console.log("Erro: ", erro); // gera erro
  } else {
    console.log("Resultado: ", resultado); // taxa gera sucesso
  }
}

//chamar
operacaoComErro(meuCallbackComErro);
