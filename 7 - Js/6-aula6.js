//Comentário - atalho - Ctrl + ;
//declaração do tipo + nome da vairável = informação

// --- TIPO LET (Escopo de Bloco) ---
let mensagem = "Olá Impressionador";
console.log(mensagem);

let cor = "vermelho";
console.log(cor);

// ERRO: let cor = "azul"; -> O JS não permite criar (declarar) a mesma variável duas vezes no mesmo lugar.
cor = "azul"; // CORRETO: Apenas mudamos o conteúdo (reatribuição).
console.log(cor);

// --- TIPO CONST (Constante) ---
const segundaMensagem = "Bem vindo ao curso Impressionador!";
console.log(segundaMensagem);

// ERRO: segundaMensagem = "Novo texto"; -> 'const' é um "balde com tampa colada", você não muda o que está dentro.
// ERRO: const segundaMensagem = "Oi"; -> Também não pode ser redeclarada.
console.log(segundaMensagem);

// --- TIPO VAR (O jeito antigo/perigoso) ---
// Comportamento de Hoisting (Içamento):
nome = "Alon"; // Funciona, mas é má prática. O JS "eleva" a declaração, mas gera confusão.
console.log(nome);

var nome = "Millene"; // Declarando com var.
console.log(nome);

var nome = "Daniel"; // REDECLARAÇÃO: O 'var' permite isso, o que é um perigo em códigos grandes (você pode apagar um dado sem querer).
console.log(nome); // Corrigindo seu erro de digitação: era 'nome', não 'noem'.

nome = "Lira"; // Reatribuição simples.
console.log(nome);
