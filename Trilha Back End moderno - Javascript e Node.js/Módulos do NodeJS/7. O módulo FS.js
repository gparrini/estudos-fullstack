import { EventEmitter } from "node:events";

const eventEmitter = new EventEmitter();

eventEmitter.on("Evento1 Lançado", (login, password) => {
  console.log(
    `Escutei o evento1! O usuário ${login} quer acessar com a senha: ${password}`
  );
});

eventEmitter.emit(
  "Evento1 Lançado",
  "DanielPorto93",
  "CachorrosDestruindoMinhaMochila"
);
