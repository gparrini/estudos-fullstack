// =================================================================
// 1. CLASSE VS INSTÂNCIA (A FÁBRICA VS O PRODUTO)
// =================================================================

// CLASSE: É o "molde" ou a "planta" de um objeto. 
// Ela diz quais características e ações todo Carro deve ter, mas não é um carro físico ainda.
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
    // ⚠️ AJUSTE: Trocamos 'Carro' por 'this'. 
    // Lembre-se da lição anterior: o 'this' aponta para a própria instância que está executando a ação!
    console.log(
      `O carro é de modelo: ${this.modelo} da marca ${this.marca}, do ano de ${this.ano}`
    );
  }
}

// INSTÂNCIA: É o produto real criado a partir do molde.
// A palavra-chave 'new' diz ao JS: "Use a fábrica Carro para construir um carro de verdade pra mim".
const classeCarro = new Carro(); 
console.log(classeCarro.modelo); // "Corolla"
classeCarro.exibirInformacoes(); // Mostra a frase completa usando o 'this'


// OBJETO SIMPLES: Diferente da classe, aqui nós criamos um objeto "na mão", sem usar um molde.
const carro = {
  modelo: "Corolla",
  marca: "Toyota",
  ano: 2024,
};
console.log(carro.modelo); // "Corolla"


// =================================================================
// 2. OBJETOS GLOBAIS: MATH vs DATE
// =================================================================

// Lembra do Math? Ele é um objeto estático. Você não precisa (nem pode) usar o 'new' com ele.
// Pense no Math como uma calculadora única presa na parede que todo mundo usa.
console.log(Math); 

// Já o 'Date' é uma CLASSE NATIVA do JavaScript.
// Por ser uma classe, você OBRIGATORIAMENTE precisa usar o 'new' para "fabricar" uma nova data.
console.log(new Date()); 

// Criando uma instância da data de AGORA (Pega a data e hora exata do seu computador)
const dataAtual = new Date(); 
console.log(dataAtual);


// =================================================================
// 3. EXTRAINDO INFORMAÇÕES DA DATA (MÉTODOS GET)
// =================================================================

// Usamos os métodos get...() para pegar pedaços isolados da nossa data:
console.log(dataAtual.getFullYear()); // Ano com 4 dígitos (ex: 2024)

// ⚠️ A PEGADINHA DO MÊS: No JavaScript, os meses são contados como listas (Arrays), ou seja, começam no ZERO!
// Janeiro = 0, Fevereiro = 1 ... Dezembro = 11.
console.log(dataAtual.getMonth()); 

console.log(dataAtual.getDate());    // Dia do mês (1 a 31). Cuidado para não confundir com getDay() que é o dia da semana!
console.log(dataAtual.getHours());   // Horas (0 a 23)
console.log(dataAtual.getMinutes()); // Minutos (0 a 59)
console.log(dataAtual.getSeconds()); // Segundos (0 a 59)


// =================================================================
// 4. O TIMESTAMP (A DATA EM FORMATO DE NÚMERO)
// =================================================================

// O Timestamp é a forma como os computadores entendem o tempo.
// Ele é a quantidade de MILISSEGUNDOS que se passaram desde o dia 1 de Janeiro de 1970 (O nascimento da era UNIX).
let timestamp = dataAtual.getTime();
console.log(timestamp); // Exibe um número gigante, tipo 1729883324187

// Você pode criar uma data no passado fornecendo esse "número gigante" para a classe Date:
console.log(new Date(1729883324187));


// =================================================================
// 5. CRIANDO DATAS ESPECÍFICAS
// =================================================================

// Você pode passar uma String de texto ("Ano-Mês-Dia") para criar uma data específica.
let agora = new Date("2024-10-07");

// Para mostrar o mês correto para um humano ler, nós somamos +1 ao getMonth()
// Como Outubro para o JS é o mês 9, ao somar +1, exibimos o mês 10!
console.log(agora.getMonth() + 1);