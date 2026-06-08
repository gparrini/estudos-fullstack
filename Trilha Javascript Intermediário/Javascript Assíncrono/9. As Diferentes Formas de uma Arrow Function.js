const soma = (a, b) => {
  return a + b;
};
// console.log(soma(10,5))

const quadrado = (x) => {
  return x * x;
};
// console.log(quadrado(5))

const dobro = (x) => x * 2;
// console.log(dobro(6));

const calcularArea = (largura, altura) => {
  const area = largura * altura;
  return area;
};
// console.log(calcularArea(8, 6));

// Função anonima
const objeto = {
  nome: "Millene",
  metodo: function () {
    console.log(`Meu nome é ${this.nome}`);
  },
};

// const objeto = {
//   nome: "Millene",
//   metodo: function () {
//     let funcaoArrow = () => console.log(`Meu nome é ${this.nome}`);
//     funcaoArrow();
//   },
// };

// const objeto = {
//   nome: "Millene",
//   metodo: () => console.log(`Meu nome é ${this.nome}`),
// }; // Gera undefined

objeto.metodo();

// THIS LÉXICO 

const pessoa = {
  nome: "Ana",
  saudacao: function () {
    setTimeout(() => {
      console.log(`Olá, ${this.nome}`);
    }, 2000);
  },
};

pessoa.saudacao();
