import http from "node:http";
import { stock } from "./Aula6_stock"; // Verifique a importação de acordo de como está a estrutura do seu computador

const server = http.createServer();

server.addListener("request", (request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(stock));
    response.end();
  }

  if (request.url === "/get-unavailable-products") {
    const getUnavailableProducts = stock.filter(
      (product) => product.amountLeft === 0
    );
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(getUnavailableProducts));
    response.end();
  }
});

server.listen(8000);
