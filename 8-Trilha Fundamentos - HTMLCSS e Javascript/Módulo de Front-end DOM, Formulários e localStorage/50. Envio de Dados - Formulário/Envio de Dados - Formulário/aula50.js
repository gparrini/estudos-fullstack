// formDara - { nome: "Millene", emial:"email@email.com"};

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); //impede a submissão tradicional do formulario

    let dados = new FormData(formulario);

    //exibir os dados no console
    for (let [chave, valor] of dados.entries()) {
      console.log(chave + ":" + valor);
    }
  });
});
