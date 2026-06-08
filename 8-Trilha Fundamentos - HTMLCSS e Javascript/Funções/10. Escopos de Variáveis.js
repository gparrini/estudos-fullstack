// ESCOPO GLOBAL - LOCAL(FUNÇÃO) - BLOCO

let global = "Sou do escopo Global";

// function mensagem() {
//   console.log(global);
// }

function mensagem() {
  // Escopo local da minha função
  let local = "Sou local da função";
  console.log(local);
  //   console.log(global);
}

mensagem();
console.log(global);
// console.log(local); Gera um erro de declaração - não consegue acessar nesse escopo

// Não é uma função - escopo de bloco
if (true) {
  let bloco = "Sou do bloco do IF";
  console.log(bloco);
  //   console.log(global);
}

// console.log(bloco); Gera um erro de declaração - não consegue acessar nesse escopo
