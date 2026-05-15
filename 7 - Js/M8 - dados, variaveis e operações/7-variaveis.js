// --- REDECLARAÇÕES ---
// O 'let' e o 'const' são rigorosos: você não pode criar duas variáveis com o mesmo nome no mesmo lugar.
let nome = "Millene"; 
// let nome = "João"; -> Se fizesse isso, daria ERRO: "Identifier 'nome' has already been declared"

const nomeProfessor = "Daniel"; 
// const nomeProfessor = "Vitor"; -> Também daria ERRO.

// Já o 'var' é o "tio legal" (até demais): ele permite que você declare a mesma variável várias vezes.
var mensagem = "Olá";
console.log(mensagem);
var mensagem = "Bem vindo!"; // Aqui ele simplesmente sobrescreve a anterior sem reclamar.
console.log(mensagem);

// --- REATRIBUIÇÕES (MUTABILIDADE) ---
// 'let' permite que você mude o VALOR, mas sem precisar usar a palavra 'let' de novo.
nome = "Lira"; 
console.log(nome); // Agora 'nome' vale "Lira".

mensagem = "Olá, bem vindo!";
console.log(mensagem);

// --- TIPO CONST - ERRO ---
// 'const' vem de "constante". Uma vez definido, o valor é sagrado.
// nomeProfessor = "Alon"; -> ERRO: "Assignment to constant variable". Você não pode mudar uma constante.
console.log(nomeProfessor);

// --- HOISTING (Içamento) ---
// O JavaScript "puxa" as declarações de 'var' para o topo do código antes de executar.
var segundaMensagem; // Aqui ela existe, mas está vazia (undefined).
console.log(segundaMensagem); 
segundaMensagem = "Utilizando Hoisting";
console.log(segundaMensagem);

// Aqui mora o perigo:
// console.log(terceiraMensagem); -> Se tentasse usar antes da linha abaixo, daria ERRO.
const terceiraMensagem = "Olá eu sou let"; 
// 'let' e 'const' até sofrem hoisting, mas entram em uma "zona morta temporal". 
// Você não pode acessá-los antes da linha onde foram escritos.

// --- VISIBILIDADE (Escopo) ---
{
  // Tudo o que é 'let' ou 'const' dentro de chaves { } nasce e morre aqui dentro.
  console.log("Isso é um bloco");
  let idade = 60;
  const real = 50;
  console.log(idade); // Aqui funciona!
}

// console.log(idade); -> ERRO: "idade is not defined". 
// Como está fora das chaves, o código não sabe que 'idade' existiu.

// --- BLOCO DE INSTRUÇÃO (Função) ---
// Funções são pequenas máquinas: você guarda um código para usar depois.
function executar() {
  console.log("Dentro da função");
  let numero = 10; // Essa variável só existe dentro da função 'executar'.
  console.log(numero);
}

// Para a "máquina" funcionar, você precisa chamá-la:
executar();
