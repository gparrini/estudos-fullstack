function criarElementoInnerText() {
  const ul = document.getElementById("lista-de-elementos");

  const novaLi = document.createElement("li");
  novaLi.innerText = "Novo input com InnerText";

  const novoInput = document.createElement("input");
  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi);
}

function criarElementoInnerHtml() {
  const ul = document.getElementById("lista-de-elementos");
  const novaLi = document.createElement("li");

  console.log("Adicionando elemento ao clicar");

  //   novaLi.innerHTML = '<input type="text" />';
  novaLi.innerHTML = "<p>Criei um parágrafo novo </p>";
  ul.appendChild(novaLi);
}

function criarElementoTextContent() {
  const ul = document.getElementById("lista-de-elementos");
  const novaLi = document.createElement("li");
  const novoInput = document.createElement("input");

  novaLi.textContent = "Atribuindo conteúdo TextContent";
  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi);
}
