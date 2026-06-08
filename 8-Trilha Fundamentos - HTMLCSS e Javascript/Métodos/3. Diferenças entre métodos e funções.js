function saudacao(nome) {
  return `Olá, ${nome}`;
}

// console.log(saudacao("Ana"));
// console.log(saudacao("Paulo"));
// console.log(saudacao("José"));

saudacao("Ana"); // Chama e executa a função

const pessoa = {
  nome: "Ana",
  saudacao: function () {
    return `Òlá, ${pessoa.nome}`;
  },
};

console.log(pessoa.saudacao()); // pessoa.saudacao() chama e executa o método do objeto
