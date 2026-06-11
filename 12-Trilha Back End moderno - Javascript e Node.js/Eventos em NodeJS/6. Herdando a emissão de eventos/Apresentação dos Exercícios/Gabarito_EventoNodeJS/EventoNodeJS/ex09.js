//? Exercício 9: Crie um EventEmitter que emite o evento ping a cada segundo. O evento ping
//? deve ser emitido no máximo 5 vezes. Após a quinta emissão, o processo deve ser finalizado
//? emitindo um evento pingFinished.

//TODO Crie um  EventEmitter que emite o evento ping
const EventEmitter = require("events");

class PingEmitter extends EventEmitter {
  constructor() {
    super();
    this.contador = 0;
    this.maxPings = 5;
  }

  //TODO  método que conte os pings (evento ping) - 5 máximo (evento pingFinished)
  iniciarPings() {
    const intervalo = setInterval(() => {
      this.contador++;
      if (this.contador <= this.maxPings) {
        this.emit("ping", this.contador);
      } else {
        this.emit("pingFinished");
        clearInterval(intervalo); //Interrompe / limpa o intervalo
      }
    }, 1000);
  }
}

//TODO Escutar evento ping
const ping = new PingEmitter();

ping.on("ping", (contagem) => {
  console.log(`Ping número: ${contagem}`);
});

//TODO Escutar evento pingFinished
ping.on("pingFinished", () => {
  console.log("O número máximo de pings foi atingido!");
});

//TODO Testar método
ping.iniciarPings();

//* O que é um Ping?
//*Um ping é um utilitário de rede usado para testar a conectividade entre dois dispositivos em uma rede,
//*como entre o seu computador e um servidor na internet. O ping envia pacotes de dados para um destino
//*(geralmente um endereço IP ou um nome de domínio) e mede o tempo que leva para os pacotes irem e voltarem
//*(tempo de ida e volta, conhecido como latência).
