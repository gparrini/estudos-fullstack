document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const limparBotao = document.getElementById("limpar");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Capturar os dados do formulário
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    //Verifica se os campos estão preenchidos
    if (nome && idade) {
      //Salvo no localStorage
      localStorage.setItem("nome", nome);
      localStorage.setItem("idade", idade);

      //Limpar os campos dos formulários
      document.getElementById("nome").value = "";
      document.getElementById("idade").value = "";

      alert("Dados salvos com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos");
    }
  });
});
