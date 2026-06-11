//? Exercício 7: Crie um sistema de fila que herde de EventEmitter. A fila deve permitir
//? adicionar "tarefas" (strings) e processá-las uma por vez a cada 2 segundos, emitindo um evento
//? taskProcessed cada vez que uma tarefa for completada. Quando todas as tarefas forem
//? processadas, emita um evento allTasksProcessed.

//TODO Crie um sistema de fila que herde de EventEmitter.
const EventEmitter = require("events");

class Fila extends EventEmitter {
  constructor() {
    super();
    this.tarefas = [];
    this.processamento = false;
  }

  //TODO Criar método adicionarTarefa (emitir evento taskAdded)
  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
    this.emit("taskAdded", tarefa);
    if (!this.processamento) {
      // true
      this.processarTarefa();
    }
    // console.log(this.processamento);
  }
  //TODO  Criar método processarTarefa - 2 segundos (emitir evento taskProcessed + allTasksProcessed)
  processarTarefa() {
    if (this.tarefas.length > 0) {
      this.processamento = true;
      const tarefaAtual = this.tarefas.shift();
      setTimeout(() => {
        this.emit("taskProcessed", tarefaAtual);
        this.processarTarefa(); // Recursividade - processar a próxima tarefa
        // console.log(this.processamento);
      }, 2000);
    } else {
      this.processamento = false;
      this.emit("allTasksProcessed");
    }
  }
}

const fila = new Fila();
//TODO Escutar evento taskAdded
fila.on("taskAdded", (tarefa) => {
  console.log(`Tarefa adicionada: ${tarefa}`);
  console.log(fila.processamento);
});
//TODO Escutar evento taskProcessed
fila.on("taskProcessed", (tarefa) => {
  console.log(`Tarefa processada: ${tarefa}`);
  console.log(fila.processamento);
});

//TODO Escutar evento allTasksProcessed
fila.on("allTasksProcessed", () => {
  console.log("Todas as tarefas foram processadas!");
  console.log(fila.processamento);
});
//TODO Testar método
fila.adicionarTarefa("Enviar Email");
fila.adicionarTarefa("Gerar relatório");
fila.adicionarTarefa("Adicionar dados ao Banco de Dados");

// const lista = ["laranja", "maçã", "morango"];
// const frutaAtual = lista.shift();
// console.log(frutaAtual);
// const frutaAtual2 = lista.shift();
// console.log(frutaAtual2);
