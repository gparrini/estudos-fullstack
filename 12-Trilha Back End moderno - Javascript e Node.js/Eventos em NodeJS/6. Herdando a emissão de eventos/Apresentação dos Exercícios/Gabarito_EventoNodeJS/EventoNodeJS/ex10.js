//? Exercício 10: Crie um programa Node.js que leia o conteúdo de um arquivo de texto e, ao
//? terminar de ler, emita um evento fileReadSuccess com o conteúdo lido. Em seguida,
//? escreva esse conteúdo em um novo arquivo e, ao finalizar a escrita, emita um evento
//? fileWriteSuccess.

//TODO Crie um programa Node.js que leia o conteúdo de um arquivo de texto
const EventEmitter = require("events");
const fs = require("fs");

class ArquivoEmitter extends EventEmitter {
  //TODO método para Ler arquivo
  lerArquivo(caminho) {
    fs.readFile(caminho, "utf-8", (err, dados) => {
      if (err) {
        this.emit("fileReadError", err);
      } else {
        this.emit("fileReadSucess", dados);
      }
    });
  }

  //TODO método para Escrever arquivo
  escreverArquivo(caminho, conteudo) {
    fs.writeFile(caminho, conteudo, (err) => {
      if (err) {
        this.emit("fileWriteError", err);
      } else {
        this.emit("fileWriteSucess", caminho);
      }
    });
  }
}

const arquivoEmitter = new ArquivoEmitter();

//TODO Escutar evento fileReadSucess
arquivoEmitter.on("fileReadSucess", (conteudo) => {
  console.log("Arquivo lido com sucesso");
  console.log(`Conteúdo: ${conteudo}`);
  arquivoEmitter.escreverArquivo("novoArquivo.txt", conteudo);
});

//TODO Escutar evento fileWriteSucess
arquivoEmitter.on("fileWriteSucess", (caminho) => {
  console.log(`Arquivo escrito com sucesso em: ${caminho}`);
});

//TODO Escutar evento fileReadError
arquivoEmitter.on("fileReadError", (erro) => {
  console.error("Erro ao ler o arquivo: ", erro);
});
//TODO Escutar evento fileWriteError
arquivoEmitter.on("fileWriteError", (erro) => {
  console.error("Erro ao escrever o arquivo: ", erro);
});

//TODO Testar método
arquivoEmitter.lerArquivo("arquivo.txt"); //SUCESSO
