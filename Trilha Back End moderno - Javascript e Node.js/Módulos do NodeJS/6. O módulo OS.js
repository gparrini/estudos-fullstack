import { EventEmitter } from "node:events";

const eventEmitter = new EventEmitter();

eventEmitter.on("Evento1 Lançado", () => {
  console.log("Escutei o evento1!");
});

eventEmitter.emit("Evento1 lançado");
