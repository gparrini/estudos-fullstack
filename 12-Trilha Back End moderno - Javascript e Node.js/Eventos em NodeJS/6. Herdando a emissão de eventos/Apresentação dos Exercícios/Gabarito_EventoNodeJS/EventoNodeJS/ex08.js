//? Exercício 8: Crie um sistema de log que herda de EventEmitter e registra todos os eventos
//? emitidos, como login, logout e error. O sistema deve armazenar as mensagens de log e,
//? ao final de cada dia (simulado por um intervalo de tempo de 5 segundos), emita um evento
//? dailyLogReport com um resumo de todos os logs do dia.

//TODO Crie um sistema de log que herda de EventEmitter
const EventEmitter = require("events");

class SistemaLogin extends EventEmitter {
  constructor() {
    super();
    this.logs = []; // lista de dados (logs) - objeto
    this.intervalId = null;
    this.iniciarRelatorioDiario();
  }

  //TODO Registra todos os eventos emitidos, como login, logout e error.
  registrarEvento(evento, mensagem) {
    const log = {
      evento,
      mensagem,
      data: new Date().toISOString(), //Cria um log único
    };
    this.logs.push(log);
    this.emit("eventoRegistrado", log); // Emite o evento quando o loga é registrado
  }

  //TODO Relatório Diário - evento dailyLogReport - 5 segundos
  iniciarRelatorioDiario() {
    this.intervalId = setInterval(() => {
      this.emit("dailyLogReport", this.logs);
      this.logs = []; // Limpar os logs após o relatório
    }, 5000);
  }

  //TODO Método para parar o relatório diário
  pararRelatorio() {
    if (this.intervalId) {
      clearInterval(this.intervalId); //Interromper o setInterval
      console.log("Relatório diário interrompido");
    }
  }
}

// iniciarRelatorioDiario() {
//     setTimeout(() => {
//       this.emit("dailyLogReport", this.logs);
//       this.logs = []; // Limpar os logs após o relatório
//     }, 5000);
//   }
// }

//TODO Escutar evento eventoRegistrado
const sistema = new SistemaLogin();
sistema.on("eventoRegistrado", (log) => {
  console.log(
    `Evento Registrado: ${log.evento} - ${log.mensagem}, data: ${log.data}`
  );
});

//TODO Escutar evento dailyLogReport
sistema.on("dailyLogReport", (logs) => {
  console.log("Relatório diário de logs: ");
  logs.forEach((log) => {
    console.log(`${log.evento}: ${log.mensagem}. Data: ${log.data}`);
  });
});

//TODO Testar método
sistema.registrarEvento("login", "Usuário admin fez login");
sistema.registrarEvento("logout", "Usuário admin fez logout");
sistema.registrarEvento("error", "Erro ao carregar");

//TODO Interromper o nosso sistema
setTimeout(() => {
  sistema.pararRelatorio();
}, 9000);

// const dataTeste = new Date();
// console.log(typeof dataTeste);
// const dataIso = new Date().toISOString();
// console.log(typeof dataIso);

// const intervalo = setInterval(() => {
//   console.log("Id");
// }, 1000);
// `Timeout {
//   _idleTimeout: 1000,
//   _idlePrev: [TimersList],
//   _idleNext: [TimersList],
//   _idleStart: 42,
//   _onTimeout: [Function (anonymous)],
//   _timerArgs: undefined,
//   _repeat: 1000,
//   _destroyed: false,
//   [Symbol(refed)]: true,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 7,
//   [Symbol(triggerId)]: 1
// }

// Timeout {
//   _idleTimeout: 1000,
//   _idlePrev: [TimersList],
//   _idleNext: [TimersList],
//   _idleStart: 62,
//   _onTimeout: [Function (anonymous)],
//   _timerArgs: undefined,
//   _repeat: 1000,
//   _destroyed: false,
//   [Symbol(refed)]: true,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 7,
//   [Symbol(triggerId)]: 1
// }`;
// console.log(intervalo);
