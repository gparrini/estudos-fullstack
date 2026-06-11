//? Exercício 5: Modifique o código da classe Conversa para adicionar dois ouvintes diferentes
//? para o evento mensagemRecebida. O primeiro ouvinte deve exibir o conteúdo da mensagem,
//? e o segundo ouvinte deve contar quantas mensagens foram recebidas.

const EventEmitter = require("events");

class Conversa extends EventEmitter {
  constructor() {
    super();
    this.totalMensagens = 0;
  }

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
  console.log(`Mensagem Recebida: ${msg}`);
});

chat.on("mensagemRecebida", () => {
  chat.totalMensagens++; // Adicionar + 1
  console.log(`Total de mensagens recebidas: ${chat.totalMensagens}`);
});

chat.receberMensagem("Primeira Mensagem");
chat.receberMensagem("Segunda Mensagem");
chat.receberMensagem("Terceira Mensagem");
chat.receberMensagem("última Mensagem");
