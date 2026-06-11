import http from "node:http";
import { stock } from "./Aula5_stock"; // Verifique a importação de acordo de como está a estrutura do seu computador
import { URL } from "node:url";

const server = http.createServer();

server.addListener("request", (request, response) => {
  const urlObject = new URL(`http://${request.headers.host}${request.url}`);
  // console.log(urlObject);
  if (urlObject.pathname === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(stock));
    response.end();
  }

  if (urlObject.pathname === "/get-unavailable-products") {
    const getUnavailableProducts = stock.filter(
      (product) => product.amountLeft === 0
    );
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(getUnavailableProducts));
    response.end();
  }

  // ?id=1
  if (urlObject.pathname === "/get-by-id") {
    const selectedObject = stock.find(
      (product) => product.id === Number(urlObject.searchParams.get("id"))
    ); // precisa converter string -> number

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(selectedObject));
    response.end();
  }
});

server.listen(8000);
