// =================================================================
// CRIANDO UM OBJETO COM MÉTODOS PERSONALIZADOS
// =================================================================

const calculadora = {
  // PROPRIEDADES (A "memória" interna da nossa calculadora)
  valor1: 0,
  valor2: 0,

  // MÉTODO 1: Serve para alterar os valores da nossa memória interna.
  // Recebe dois números por argumento (v1, v2) e os salva no objeto.
  definirValores: function (v1, v2) { //podemos criar metodos personalizados apenas usando a sintaxe de função, ou seja, 'definirValores: function() { ... }'. O JavaScript é flexível e aceita essa forma tradicional. A sintaxe mais moderna (ES6) seria 'definirValores(v1, v2) { ... }', mas ambas funcionam perfeitamente. Escolha a que você achar mais clara e confortável para escrever!
    // 🧠 O 'this' aponta para o próprio objeto 'calculadora'.
    // 'this.valor1 = v1' significa: "Pegue o v1 que recebi e salve na propriedade valor1 DESTE objeto".
    this.valor1 = v1;
    this.valor2 = v2;
  },

  // MÉTODO 2: Soma os valores que estão salvos na memória
  somar: function () {
    // O seu comentário estava certíssimo! 'this.valor1' funciona exatamente 
    // como 'calculadora.valor1', mas usar 'this' é o padrão profissional.
    return this.valor1 + this.valor2; // this serve para 
  },

  // MÉTODO 3: Subtrai os valores da memória
  subtrair: function () {
    return this.valor1 - this.valor2; 
  },

  // MÉTODO 4: Multiplica os valores da memória
  multiplicar: function () {
    return this.valor1 * this.valor2; 
  },

  // MÉTODO 5: Divide os valores da memória
  dividir: function () {
    return this.valor1 / this.valor2; 
  },
};


// =================================================================
// COLOCOANDO A CALCULADORA PARA FUNCIONAR (EXEMPLO DE USO)
// =================================================================

// Passo 1: Alimentamos a memória da calculadora com os números 5 e 20.
calculadora.definirValores(5, 20); //.definirValores é o método que criamos para colocar os números dentro da calculadora.

// Passo 2: Chamamos as ações (métodos) e mostramos os resultados na tela.
console.log(calculadora.somar());       // 5 + 20  = 25
console.log(calculadora.subtrair());    // 5 - 20  = -15
console.log(calculadora.multiplicar()); // 5 * 20  = 100
console.log(calculadora.dividir());     // 5 / 20  = 0.25


// =================================================================
// DINAMISMO DO JAVASCRIPT: INJETANDO UM MÉTODO DEPOIS DE PRONTO
// =================================================================

// No JavaScript, os objetos são vivos! Você pode dar novas habilidades para eles
// mesmo depois que eles já foram criados. Aqui criamos o método de potenciação (**).
calculadora.exponenciacao = function () {
  return this.valor1 ** this.valor2; // Eleva o valor1 ao valor2
};

// Como definimos os valores lá em cima como 5 e 20, aqui ele calcula 5 elevado a 20.
console.log(calculadora.exponenciacao()); // Exibe: 95367431640625

// o this, de forma simples, serve para falar "Ei, eu quero acessar ou alterar algo que está dentro do meu próprio objeto". Ele é como um pronome que aponta para o objeto atual, permitindo que os métodos interajam com as propriedades do mesmo objeto de forma dinâmica e flexível.
// metodos é uma função que pertence a um objeto, ou seja, é uma ação que o objeto pode executar
//objeto é uma coleção de propriedades e métodos, ou seja, é um conjunto de dados e ações relacionadas a um tema específico. exemplo: um objeto "carro" pode ter propriedades como "marca", "modelo", "ano" e métodos como "acelerar", "frear", "virar".