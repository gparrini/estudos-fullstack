// =================================================================
// 1. FUNÇÃO TRADICIONAL (INDEPENDENTE)
// =================================================================

// Esta é uma função autônoma. Ela não depende de nenhum objeto para existir.
function saudacao(nome) {
  return `Olá, ${nome}`;
}

// Exemplos comentados de chamadas que exibem o retorno no console:
// console.log(saudacao("Ana"));
// console.log(saudacao("Paulo"));
// console.log(saudacao("José"));

// Aqui você chama a função, mas como ela apenas realiza um 'return' (e não um console.log interno),
// o valor é devolvido mas não aparece na tela.
saudacao("Ana"); 


// =================================================================
// 2. MÉTODO (FUNÇÃO DENTRO DE UM OBJETO)
// =================================================================

// Criamos um objeto chamado 'pessoa'. Objetos guardam características (propriedades) e ações.
const pessoa = {
  nome: "Ana", // Isto é uma PROPRIEDADE (característica)
  
  // Isto é um MÉTODO (uma ação que o objeto sabe executar).
  // Note que omitimos o nome da função (ela é anônima), pois o próprio nome da propriedade 'saudacao' vira o nome do método.
  saudacao: function () {
    // 💡 AJUSTE DE BOA PRÁTICA: Em vez de usar `pessoa.nome`, usamos `this.nome`.
    // A palavra 'this' significa "este" ou "disso". No JavaScript, ela diz: 
    // "Pegue a propriedade 'nome' DESTE próprio objeto onde eu estou inserido".
    return `Olá, ${this.nome}`;
  },
};

// Executando o método:
// Usamos a notação de ponto (objeto.metodo()) para dizer ao JavaScript QUAL objeto deve agir.
// Os parênteses () no final são obrigatórios para dar o comando de "execute agora".
console.log(pessoa.saudacao()); // Exibe: Olá, Ana


/*
================================================================
📝 RESUMO DO APRENDIZADO: FUNÇÃO VS MÉTODO
================================================================

1. FUNÇÃO:
   - É chamada diretamente pelo seu nome: `saudacao("Ana")`.
   - É um bloco de código livre no arquivo global.

2. MÉTODO:
   - É chamado através de um objeto dono: `pessoa.saudacao()`.
   - É basicamente uma função que foi "contratada" para trabalhar exclusivamente dentro de um objeto.

3. A PALAVRA-CHAVE 'THIS':
   - Dentro de um método, o `this` aponta para o próprio objeto dono. 
   - Usar `this.nome` é muito melhor do que `pessoa.nome` porque, se amanhã você mudar o nome da variável 
     de 'pessoa' para 'cliente', o seu método continua funcionando perfeitamente sem precisar de manutenção!
*/