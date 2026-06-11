//? Exercício 1: Crie um programa Node.js onde você tenha um EventEmitter. Emita um evento
//? chamado mensagemRecebida e ouça esse evento para exibir a mensagem "Mensagem
//? recebida com sucesso!".

const EventEmitter = require("events");
const evento = new EventEmitter();

evento.on("mensagemRecebida", () => {
  console.log("Mensagem recebida com sucesso!");
});

evento.emit("mensagemRecebida");

//? Exercício 2: Altere o código anterior para que o evento mensagemRecebida aceite um
//? argumento contendo a mensagem recebida e exiba essa mensagem no console.

const evento2 = new EventEmitter();

evento2.on("mensagemRecebida", (msg) => {
  console.log(`Mensagem recebida: ${msg}`);
});

const mensagem = "Olá, Impressionador!";
evento2.emit("mensagemRecebida", mensagem);
