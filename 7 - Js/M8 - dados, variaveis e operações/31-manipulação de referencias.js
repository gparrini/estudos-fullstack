// --- REFERÊNCIA EM ARRAYS ---

let listaA = [1, 2, 3];

// IMPORTANTE: Aqui você NÃO criou uma cópia. 
// Você criou um "atalho" ou "ponteiro". listaB aponta para o mesmo lugar na memória que listaA.
let listaB = listaA; 

// Como os dois apontam para o mesmo lugar, mudar um altera o outro.
listaB[0] = 99;

console.log(listaA); // [99, 2, 3]
console.log(listaB); // [99, 2, 3]



// --- VALOR EM TIPOS PRIMITIVOS (Comentado no seu original) ---

// let string = "Olá";
// let mensagem = string; // Aqui o JS cria uma CÓPIA real, porque é uma string (primitivo).
// mensagem = "Olá Bem vindo"; // Mudar 'mensagem' não afeta 'string'.


// --- REFERÊNCIA EM OBJETOS ---

let objA = { nome: "Millene" };

// Mesma regra dos arrays: objB apenas "aponta" para o objA.
let objB = objA; 
objB.idade = 34; // Adicionar idade em B também adiciona em A.

console.log(objA); // { nome: "Millene", idade: 34 }
console.log(objB); // { nome: "Millene", idade: 34 }


// --- CÓPIA REAL COM SPREAD OPERATOR (...) ---

// O operador spread "espalha" os itens de listaA dentro de um NOVO array [].
// Agora listaC é um objeto totalmente novo na memória.
let listaC = [...listaA]; 
console.log(listaC);

listaC[3] = 100; // Isso só afeta a listaC

console.log(listaC); // [99, 2, 3, 100]
console.log(listaA); // [99, 2, 3] -> Continua intacta!


// --- CÓPIA REAL DE OBJETOS COM SPREAD ---

// O spread {...objA} cria um novo objeto e "clona" as propriedades de objA para dentro dele.
let objC = { ...objA }; 
objC.corDeCabelo = "Castanho";

console.log(objC); // { nome: "Millene", idade: 34, corDeCabelo: "Castanho" }
console.log(objA); // { nome: "Millene", idade: 34 } -> Continua original!