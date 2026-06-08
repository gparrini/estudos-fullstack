const produto = {
  nome: "Laptop",
  preco: 2500,
  disponibilidade: true,
};

Object.assign(produto, { emEstoque: 10, categoria: "Eletrônicos" }); //adicionar novas propriedades
console.log(produto);

Object.defineProperties(produto, "disponibilidade", { value: false }); //Modificar o valor de uma propriedade
console.log(produto);

const pessoa = {
  //const origem
  nome: "Carlos",
  idade: 30,
};

const trabalho = {
  //const origem 2
  profissao: "Engenheiro",
  cidade: "São Paulo",
};

// const destino = {
//   metodo: function () {
//     console.log("Olá eu sou o destino");
//   },
// };
// Object.assign(destino, origem, origem2);

const funcionario = {};
Object.assign(funcionario, pessoa, trabalho); // Copia para um objeto destino
console.log(funcionario);

Object.defineProperties(funcionario, "salario", {
  //Adicionar uma nova propriedade
  value: 2000,
  enumerable: true,
  writable: true,
  configurable: true,
});
console.log(funcionario);

delete funcionario.salario;
console.log(funcionario);
