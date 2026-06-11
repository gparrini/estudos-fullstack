//? Exercício 3: Crie uma classe chamada Conversa que herde de EventEmitter. A classe
//? deve ter um método chamado enviarMensagem que emita o evento mensagemEnviada. O
//? evento deve aceitar um argumento com a mensagem enviada e exibir no console quando a
//? mensagem for enviada.

//? Exercício 4: Modifique o código da classe Conversa para herdar a emissão de eventos e
//? adicione um novo evento chamado mensagemRecebida. Ao receber a mensagem, exiba
//? "Nova mensagem recebida!" e a própria mensagem.

const EventEmitter = require("events");

class Conversa extends EventEmitter {
  enviarMensagem(mensagem) {
    this.emit("mensagemEnviada", mensagem);
  }

  receberMensagem(mensagem) {
    this.emit("mensagemRecebida", mensagem);
  }
}

const chat = new Conversa();

chat.on("mensagemEnviada", (msg) => {
  console.log(`Mensagem enviada: ${msg}`);
});

chat.on("mensagemRecebida", (msg) => {
  console.log("Nova Mensagem recebida!");
  console.log(`Mensagem Recebida: ${msg}`);
});

chat.enviarMensagem("Olá");
chat.receberMensagem("Oi, tudo bem?");
