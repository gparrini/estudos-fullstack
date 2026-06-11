let elemsBlur = document.querySelectorAll(".blur");

elemsBlur.forEach((elemBlur) => {
  let elemImg = elemBlur.querySelector("img");

  function carregamentoConcluido() {
    console.log("Carregamento está concluído!");

    elemBlur.classList.add("carregado");
  }

  if (elemImg.complete) {
    carregamentoConcluido();
  } else {
    console.log("Carregamento ainda está em andamento!");

    elemImg.addEventListener("load", () => {
      carregamentoConcluido();
    });
  }
});
