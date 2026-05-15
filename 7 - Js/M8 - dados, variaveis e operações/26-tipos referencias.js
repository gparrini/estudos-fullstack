/**
 * 1. TIPOS PRIMITIVOS (Imutáveis)
 * Exemplos: Number, String, Boolean.
 * * O valor em si não pode ser alterado após a criação. 
 * Quando você "muda" a variável, você está apenas substituindo o valor antigo 
 * por um novo na memória.
 */

let nome = "João";
nome[0] = "M"; // Tentativa de alterar a primeira letra diretamente.
console.log(nome); // Saída: "João" - A string original NÃO mudou porque é imutável.

let idade = 30;
idade = 31; // Aqui você não alterou o "30", você substituiu a variável por "31".

/**
 * 2. TIPOS DE REFERÊNCIA (Mutáveis)
 * Exemplos: Object, Array, Function.
 * * Diferente dos primitivos, a variável não guarda o "valor" direto, 
 * mas sim um "endereço" (referência) de onde os dados estão na memória.
 */

// Pense no objeto abaixo como o "Elefante" do seu slide:
let animal = { tipo: "Elefante", cor: "Cinza" };

// Eles são MUTÁVEIS: podemos alterar o valor interno sem trocar a referência.
animal.cor = "Azul"; 
console.log(animal.cor); // Saída: "Azul" - O "Elefante" foi modificado.

/**
 * 3. ANALOGIA DO MAPA
 * "Mudar a variável não muda o elefante, mas muda o mapa para apontar 
 * para um elefante diferente." 
 */

let mapa = animal; // Agora 'mapa' aponta para o mesmo elefante que 'animal'.

// Se mudarmos o 'mapa' para outro objeto:
mapa = { tipo: "Rato" }; 
// O objeto "Elefante" ainda existe na memória, mas a variável 'mapa' 
// agora aponta para um novo lugar (o "Rato").