import http from "node:http";
import { stock } from "./stock"; // Verifique a importação de acordo de como está a estrutura do seu computador
import { URL } from "node:url";
import { write } from "node:fs";

const server = http.createServer();

server.addListener("request", (request, response) => {
  const urlObject = new URL(`http://${request.headers.host}${request.url}`);
  // console.log(urlObject);
  if (urlObject.pathname === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(stock));
    response.end();
    return;
  }

  if (
    urlObject.pathname === "/get-unavailable-products" &&
    request.method === "GET"
  ) {
    const getUnavailableProducts = stock.filter(
      (product) => product.amountLeft === 0
    );
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(getUnavailableProducts));
    response.end();

    if (
      urlObject.pathname === "/get-unavailable-products" &&
      request.method === "POST"
    ) {
      response.writeHead(405, { "Content-Type": "text/plain" });
      response.write(
        "Esse endpoint não permite o acesso por meio de uma requisição do tipo Post"
      );
      response.end();
      return;
    }
  }

  // ?id=1
  if (urlObject.pathname === "/get-by-id") {
    const idParam = urlObject.searchParams.get("id");
    // console.log(urlObject.searchParams.get('id'));
    if (!idParam || isNaN(idParam)) {
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.write("Informe um ID numérico");
      response.end();
      return;
    }

    const selectedObject = stock.find(
      (product) => product.id === Number(idParam)
    ); // precisa converter string -> number

    // console.log(selectedObject)

    if (!selectedObject) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Não existe um produto com esse Id");
      response.end();
      return;
    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(selectedObject));
    response.end();
    return;
  }
});

server.listen(8000);
