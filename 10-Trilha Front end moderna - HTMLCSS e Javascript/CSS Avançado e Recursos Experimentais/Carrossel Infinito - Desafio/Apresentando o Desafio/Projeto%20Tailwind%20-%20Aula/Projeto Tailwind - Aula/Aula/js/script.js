// Menu Header
const elemHeader = document.querySelector("header");
const elemMenu = document.querySelector(".js-menu");

elemMenu.addEventListener("click", () => {
  const barras = elemMenu.querySelectorAll("div");
  const barraCima = barras[0];
  const barraBaixo = barras[1];

  elemHeader.classList.toggle("grid-rows-[3.75rem_1fr]");
  elemHeader.classList.toggle("h-screen");

  barraCima.classList.toggle("rotate-45");
  barraCima.classList.toggle("translate-y-[0.28125rem]");

  barraBaixo.classList.toggle("-rotate-45");
  barraBaixo.classList.toggle("-translate-y-[0.28125rem]");
});

// Personalização Carteira
const elemImgCarteira = document.querySelector(".js-img-carteira");
const elemPictureCarteira = elemImgCarteira.parentElement;
const elemPictureSource = elemPictureCarteira.querySelector("source");
const elemTextoPersonalizacao = document.querySelector(".js-texto-cor");
const elemsBolinha = document.querySelectorAll(".js-bolinha");

elemsBolinha.forEach((elemBolinha) => {
  elemBolinha.addEventListener("click", () => {
    const novaCor = elemBolinha.getAttribute("data-cor");
    const corAtual = elemImgCarteira.getAttribute("data-cor-atual");
    const textoCor = elemBolinha.getAttribute("data-texto-cor");

    // Tirar a borda preta e adicionar a cinza em todos os elementos
    elemsBolinha.forEach((elem) => {
      elem.classList.remove("border-black");
      elem.classList.add("border-gray-300");
    });

    // Colocar a borda preta no elemento selecionado
    elemBolinha.classList.add("border-black");
    elemBolinha.classList.remove("border-gray-300");

    // Mudar o texto da personalização
    elemTextoPersonalizacao.innerText = textoCor;

    // Mudar o src da imagem e o srcset do source
    elemImgCarteira.src = elemImgCarteira.src.replaceAll(corAtual, novaCor);
    elemPictureSource.srcset = elemPictureSource.srcset.replaceAll(
      corAtual,
      novaCor,
    );
    // elemImgCarteira.src = `https://www.jouse.com.br/static/img/presentation/jouse-serie-1/design/${novaCor}-2x.jpg`;

    // Atualizar a 'cor-atual' na nossa imagem
    elemImgCarteira.setAttribute("data-cor-atual", novaCor);
  });
});
