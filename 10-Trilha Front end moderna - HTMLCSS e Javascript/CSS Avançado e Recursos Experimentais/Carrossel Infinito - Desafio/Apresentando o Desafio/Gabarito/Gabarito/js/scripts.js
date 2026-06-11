// Menu cabeçalho
const elemBotaoMenu = document.querySelector(".js-botao-menu");
const elemSubMenu = document.querySelector(".js-submenu");
const elemHeader = document.querySelector(".js-header");

elemBotaoMenu.addEventListener("click", () => {
  const elemTracos = elemBotaoMenu.querySelectorAll("div");

  elemHeader.classList.toggle("grid-rows-[60px_1fr]");
  elemHeader.classList.toggle("h-screen");

  elemTracos[0].classList.toggle("translate-y-[4.5px]");
  elemTracos[0].classList.toggle("rotate-45");

  elemTracos[1].classList.toggle("translate-y-[-4.5px]");
  elemTracos[1].classList.toggle("-rotate-45");
});

// Cores abacamento
const elemsBotaoAcabamento = document.querySelectorAll(".js-acabamento");
const elemTextoAcabamento = document.querySelector(".js-txt-acabamento");
const elemImgCarteiraAcabamento = document.querySelector(".js-img-acabamento");

elemsBotaoAcabamento.forEach((elem) => {
  elem.addEventListener("click", () => {
    // Tirar borda preta de todos
    elemsBotaoAcabamento.forEach((botaoAcabamento) => {
      botaoAcabamento.classList.remove("border-black");
      botaoAcabamento.classList.add("border-gray-300");
    });

    // Adicionar borda preto no clicado
    elem.classList.add("border-black");
    elem.classList.remove("border-gray-300");

    // Mudar texto do acabamento
    elemTextoAcabamento.innerText = elem.getAttribute("data-texto-cor");

    // Mudar src da imagem do acabamento
    elemImgCarteiraAcabamento.src = `https://www.jouse.com.br/static/img/presentation/jouse-serie-1/design/${elem.getAttribute(
      "data-cor"
    )}.jpg`;
  });
});
