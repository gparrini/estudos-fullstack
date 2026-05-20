// =================================================================
// OBJETOS: PROPRIEDADES VS MÉTODOS
// =================================================================

const objeto = {
  // PROPRIEDADE: É uma característica do objeto. Guarda um valor (número, texto, etc).
  // Pense nisso como um dado que o objeto possui.
  propriedade: 10,
  
  // MÉTODO: É uma função atrelada ao objeto. 
  // Pense nisso como uma habilidade ou ação que o objeto sabe executar.
  saudacao: function () {
    console.log("Olá eu sou um método");
  },
};

// ACESSANDO UMA PROPRIEDADE: 
// Usamos o ponto e o nome dela. Não usamos parênteses (), pois não estamos 
// mandando o JavaScript "fazer" nada, estamos apenas lendo uma informação que já está lá.
console.log(objeto.propriedade); // Exibe: 10

// EXECUTANDO UM MÉTODO:
// Aqui os PARÊNTESES () são obrigatórios. Eles são o "gatilho". 
// Eles dizem ao JavaScript: "Isso é uma ação, execute o código que está lá dentro agora!".
objeto.saudacao(); // Exibe: Olá eu sou um método


// =================================================================
// A PROPRIEDADE NATIVA: .length (Comprimento / Tamanho)
// =================================================================

// O JavaScript é inteligente. Quando você cria uma String (texto) ou um Array (lista), 
// ele automaticamente embute uma propriedade escondida chamada 'length' para te ajudar.

const string = "Eu sou louco por Javascript!!!";
// Em Strings, a propriedade 'length' conta a quantidade total de CARACTERES 
// (incluindo espaços em branco e pontuações).
console.log(string.length); // Exibe: 30

const array = [1, 30, 56, 4];
// Em Arrays, a propriedade 'length' conta a quantidade de ELEMENTOS (itens) 
// que existem dentro da lista, não importa o valor numérico deles.
console.log(array.length); // Exibe: 4