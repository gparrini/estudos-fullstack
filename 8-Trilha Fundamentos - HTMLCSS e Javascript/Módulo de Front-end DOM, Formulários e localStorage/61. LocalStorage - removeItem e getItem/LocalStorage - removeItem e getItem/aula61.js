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

  //Limpar localStorage - removeItem()
  limparBotao.addEventListener("click", function () {
    localStorage.removeItem("nome");
    localStorage.removeItem("idade");
    alert("Dados foram removidos do localStorage");
  });

  //getItem - acessar os dados do nosso localStorage
  const carregarBtn = document.getElementById("carregar");
  const texto = document.getElementById("texto");

  carregarBtn.addEventListener("click", function () {
    const dadoNome = localStorage.getItem("nome");
    const dadoIdade = localStorage.getItem("idade");

    texto.textContent = `O nome do usuário é ${dadoNome} e sua idade é ${dadoIdade}`;
  });
});
