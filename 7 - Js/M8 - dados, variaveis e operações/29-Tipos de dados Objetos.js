// --- CRIANDO UM OBJETO ---
// Um objeto é uma coleção de propriedades (chave: valor)
let carro = {
  marca: "Toyota",       // chave: marca, valor: "Toyota"
  modelo: "Corolla",
  ano: 2024,
  cor: "Prata",
  airbag: true,          // Pode guardar booleanos
  itens: ["abs", "4 portas", "step"], // Pode guardar até arrays!
};

//Acessar os valores das propriedades (chaves)
// 1. Notação de Ponto (Dot Notation): É a mais comum e fácil de ler.
// console.log(carro.marca);
// console.log(carro.modelo);
// console.log(carro.ano);
// console.log(carro.cor);
// console.log(carro.airbag);
// console.log(carro.itens);


// 2. Notação de Colchetes (Bracket Notation): Útil quando o nome da chave está em uma variável 
// ou tem caracteres especiais (como espaços ou hifens).
console.log(carro["modelo"]);
console.log(carro);


// --- ADICIONANDO NOVAS PROPRIEDADES ---
// Você não precisa "declarar" que um objeto terá kmRodados antes. Basta atribuir.
carro.kmRodados = 15000;
console.log(carro);

// --- CRIANDO UM OBJETO ---
// Um objeto é uma coleção de propriedades (chave: valor)
let carro = {
  marca: "Toyota",       // chave: marca, valor: "Toyota"
  modelo: "Corolla",
  ano: 2024,
  cor: "Prata",
  airbag: true,          // Pode guardar booleanos
  itens: ["abs", "4 portas", "step"], // Pode guardar até arrays!
};

// --- ACESSANDO VALORES ---

// 1. Notação de Ponto (Dot Notation): É a mais comum e fácil de ler.
// console.log(carro.marca); 

// 2. Notação de Colchetes (Bracket Notation): Útil quando o nome da chave está em uma variável 
// ou tem caracteres especiais (como espaços ou hifens).
console.log(carro["modelo"]); 
console.log(carro);

// --- ADICIONANDO NOVAS PROPRIEDADES ---
// Você não precisa "declarar" que um objeto terá kmRodados antes. Basta atribuir.
carro.kmRodados = 15000;
console.log(carro);

// Outro exemplo de objeto
let livro = {
  titulo: "Javascript para iniciantes",
  autor: "João Silva",
  ano: 2021,
  genero: "Programação",
};



console.log(livro.titulo);

// Adicionando propriedade com ponto
livro.paginas = 300;

// Adicionando propriedade com colchetes (funciona igual ao ponto aqui)
livro["idioma"] = "Português";

// --- REMOVENDO PROPRIEDADES ---
// O comando 'delete' remove a chave e o valor permanentemente do objeto
delete livro.idioma;

// --- VERIFICANDO EXISTÊNCIA ---
// O operador 'in' verifica se uma chave (propriedade) existe dentro do objeto
console.log("autor" in livro); // Retorna true (existe)
console.log("idioma" in livro); // Retorna false (foi deletado ou nunca existiu)