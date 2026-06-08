const http = require("http");

//Função para lidar com requisições
const server = http.createServer((req, res) => {
  //Definindo o cabeçalho da resposta com HTML
  res.writeHead(200, { "Content-Type": "text/html" });

  //Escrevendo uma resposta simples
  res.write("<h1>JAVASCRIPT IMPRESSIONADOR NO BACKEND</h1>");

  //Finalizando a resposta
  res.end();
});

//Configurando o servidor para ouvir na porta 3000
server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000...");
});
