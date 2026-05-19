// =================================================================
// ENTENDENDO ESCOPOS: GLOBAL vs LOCAL vs BLOCO
// =================================================================

// 🌎 1. ESCOPO GLOBAL:
// Esta variável foi criada "ao ar livre", fora de qualquer função ou bloco {}.
// Ela é pública: qualquer parte do seu código (funções, ifs, loops) consegue enxergar e usá-la.
let global = "Sou do escopo Global";


// 🏠 2. ESCOPO LOCAL (OU DE FUNÇÃO):
function mensagem() {
  // Esta variável nasceu dentro das chaves da função. 
  // Ela é "privada" e só existe aqui dentro. O ciclo de vida dela termina quando a função acaba.
  let local = "Sou local da função";
  
  console.log(local);  // Funciona! Ela está acessando uma variável do seu próprio escopo.
  
  // console.log(global); 
  // Se descomentar a linha acima, funciona! A função consegue "olhar para fora" e ver o escopo global.
}

// Executando a função para rodar o código interno dela
mensagem();

// Testes de Acesso no ambiente Global:
console.log(global); // Funciona! Estamos no mundo global acessando uma variável global.

// console.log(local); 
// ❌ ERRO DE DECLARAÇÃO (ReferenceError): Se você descomentar a linha acima, o código quebra.
// Motivo: Quem está no escopo global não tem permissão para invadir o escopo privado da função.


// 📦 3. ESCOPO DE BLOCO:
// Qualquer par de chaves `{}` (em estruturas como IF, FOR, WHILE) cria um bloco.
// Atenção: Variáveis criadas com 'let' ou 'const' ficam trancadas dentro desse bloco!
if (true) {
  let bloco = "Sou do bloco do IF";
  
  console.log(bloco);  // Funciona! Está dentro do território do IF.
  // console.log(global); // Funciona! O bloco também consegue olhar para o mundo global.
}

// console.log(bloco); 
// ❌ ERRO DE DECLARAÇÃO (ReferenceError): Se você descomentar a linha acima, o código quebra.
// Motivo: A variável 'bloco' morreu assim que o JavaScript passou pela chave de fechamento '}' do IF.