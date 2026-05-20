// =================================================================
// 1. EXTRAINDO DADOS DO OBJETO (CHAVES E VALORES)
// =================================================================

let produto = { // ⚠️ AJUSTE: Mudei para 'let' pois você vai reatribuir/recriar abaixo
  nome: "Laptop",
  preco: 2500,
  disponibilidade: true,
  emEstoque: 10,
};

// Object.keys(): Retorna uma lista (Array) apenas com os Nomes das propriedades (as chaves).
console.log(Object.keys(produto)); // ["nome", "preco", "disponibilidade", "emEstoque"]

// Object.values(): Retorna uma lista apenas com os Valores guardados nas chaves.
console.log(Object.values(produto)); // ["Laptop", 2500, true, 10]

// Object.entries(): Retorna uma lista de listas. Cada item é um par [chave, valor].
// Isso é absurdamente útil quando queremos fazer um loop (for) no objeto.
console.log(Object.entries(produto)); // [["nome", "Laptop"], ["preco", 2500], ...]


// =================================================================
// 2. MODIFICANDO E ADICIONANDO PROPRIEDADES 
// =================================================================

// Recriando o objeto para o próximo exemplo
produto = {
  nome: "Laptop",
  preco: 2500,
  disponibilidade: true,
};

// Object.assign(destino, origens...): Copia propriedades de um ou mais objetos para o objeto destino.
// Aqui estamos jogando as propriedades {emEstoque, categoria} para dentro de 'produto'.
Object.assign(produto, { emEstoque: 10, categoria: "Eletrônicos" }); 
console.log(produto);

// ⚠️ AJUSTE: O método correto para mexer em UMA propriedade é o 'defineProperty' (no singular).
// Esse método é poderoso porque permite criar propriedades "protegidas" ou "invisíveis".
Object.defineProperty(produto, "disponibilidade", { value: false }); 
console.log(produto.disponibilidade); // false


// =================================================================
// 3. MESCLANDO OBJETOS DIFERENTES
// =================================================================

const pessoa = {
  nome: "Carlos",
  idade: 30,
};

const trabalho = {
  profissao: "Engenheiro",
  cidade: "São Paulo",
};

const funcionario = {}; // Objeto vazio (Destino)

// Aqui, o 'funcionario' recebe tudo que tem em 'pessoa' e tudo que tem em 'trabalho'.
Object.assign(funcionario, pessoa, trabalho); 
console.log(funcionario); // {nome: "Carlos", idade: 30, profissao: "Engenheiro", ...}

// =================================================================
// 4. CONFIGURAÇÕES AVANÇADAS DE PROPRIEDADE E DELEÇÃO
// =================================================================

// ⚠️ AJUSTE: Novamente, 'defineProperty' no singular para configurar uma única propriedade 'salario'.
Object.defineProperty(funcionario, "salario", {
  value: 2000,
  enumerable: true,   // true = Aparece quando listamos as chaves (ex: no Object.keys)
  writable: true,     // true = O valor PODE ser alterado no futuro (ex: funcionario.salario = 3000)
  configurable: true, // true = A propriedade PODE ser apagada/deletada depois
});
console.log(funcionario);

// O comando 'delete' remove completamente uma chave do objeto.
// Só funcionou com o 'salario' porque o 'configurable' estava como 'true' acima!
delete funcionario.salario;
console.log(funcionario);


// =================================================================
// 5. HERANÇA E PROTÓTIPOS (CRIANDO OBJETOS A PARTIR DE OUTROS)
// =================================================================

// ⚠️ AJUSTE: Renomeei para pessoaBase para não dar conflito com a 'const pessoa' lá de cima.
const pessoaBase = {
  cidade: "Rio de Janeiro",
  surf: true,
  falar: function () {
    console.log("Olá");
  },
};

// Object.create(): Cria um objeto novo (joao), mas usa o objeto 'pessoaBase' como seu MOLD/PROTÓTIPO.
// É como se joao herdasse o DNA da pessoaBase.
const joao = Object.create(pessoaBase);

// Veja! O joao consegue falar e sabe a cidade, mesmo estando "vazio", pois ele herda de pessoaBase.
joao.falar(); // Imprime: "Olá"
console.log(joao.cidade, joao.surf); // Imprime: "Rio de Janeiro" e true

// Agora adicionamos características próprias e únicas ao joao (que não afetam a pessoaBase):
joao.nome = "João";
joao.idade = 30;
console.log(joao); // Mostra apenas { nome: "João", idade: 30 }

// ⚠️ AJUSTE: Corrigido o erro de digitação para 'hasOwnProperty'.
// hasOwnProperty("propriedade"): Pergunta ao objeto "Essa propriedade é SUA mesma, ou você herdou?".
console.log(joao.hasOwnProperty("nome")); // true (Adicionamos direto no João)
console.log(joao.hasOwnProperty("surf")); // false (O João não tem surf, ele herdou da pessoaBase!)