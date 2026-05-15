// Existem 3 formas de criar strings:
// "" e '' são basicamente iguais.
// `` (crase) é a "Template String", que permite colocar variáveis dentro do texto.
const quebraDeLinha = "__________________________________________________________________________________";

// 'let' permite que o valor mude depois. 
let mensagem = "Olá, ";
let nome = "Paulo";
let mensagem3 = "Bem vindo ao curso";

// Aqui você usou a Template String. O ${} "chama" o valor da variável para dentro do texto.
let mensagem2 = `Olá, ${nome}. ${mensagem3}`;

// Concatenação "raiz" usando o símbolo de +
console.log(mensagem + nome + ".Bem vindo ao curso!");

// Exibindo a string montada com as crases (muito mais limpo, né?)
console.log(mensagem2);
console.log(quebraDeLinha);

// O índice no JS começa sempre no 0. 
// P(0) a(1) u(2) l(3) o(4)
// Você tentou trocar o "l" por "Q" acessando o índice [3].

console.log((nome[3] = "Q")); // Isso vai retornar "Q"...
console.log(nome[3]);         // ...MAS o nome continua sendo "Paulo"!
