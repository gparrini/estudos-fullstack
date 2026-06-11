let elemItens = document.querySelector(".itens");
let itensFilhos = Array.from(elemItens.children);

itensFilhos.forEach((item) => {
  let itemDuplicado = item.cloneNode(true);

  itemDuplicado.setAttribute("aria-hidden", "true");
  elemItens.appendChild(itemDuplicado);
});

console.log("Duplicou todos os itens!");
