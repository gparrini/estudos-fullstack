// Classe vs. Instância

class Carro {
  marca = "Toyota";
  modelo = "Corolla";
  ano = 2024;

  ligar() {
    console.log("Carro ligado");
  }

  desligar() {
    console.log("Carro desligado!");
  }

  exibirInformacoes() {
    console.log(
      `O carro é de modelo: ${Carro.modelo} da marca ${Carro.marca}, do ano de ${Carro.ano}`
    );
  }
}

//Classe
const classeCarro = new Carro(); // criar - Instância
// console.log(classeCarro.modelo);

//OBJETO SIMPLES
const carro = {
  modelo: "Corolla",
  marca: "Toyota",
  ano: 2024,
};

// console.log(carro.modelo);

//Objeto Global Date
console.log(Math); // new Math()
console.log(new Date()); // CLASSE DO JAVASCRIPT

const dataAtual = new Date(); // criando uma instância do objeto/classe DATE
console.log(dataAtual);
