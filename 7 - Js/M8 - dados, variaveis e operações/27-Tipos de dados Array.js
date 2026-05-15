// --- BÁSICO DE ARRAYS ---

// Criando um array com diferentes tipos de dados
let lista = ["Banana", 23, true, "Maçã"]; // Índice 0: "Banana", Índice 1: 23...

// Reatribuindo um novo array à variável 'lista'
lista = ["banana", "maçã", "pera"];
console.log(lista); // ["banana", "maçã", "pera"]

// Alterando um valor específico através do índice
lista[0] = "laranja"; 
console.log(lista[0]); // "laranja"
console.log(lista);    // ["laranja", "maçã", "pera"]


// --- A PEGADINHA DA IMUTABILIDADE ---

let nome = "João";
nome[0] = "M"; // Tenta mudar o 'J' por 'M'
// IMPORTANTE: Em JS, strings são imutáveis. 
// Você pode ler o índice nome[0], mas não pode alterá-lo diretamente assim.
console.log(nome); // Continua sendo "João"


// --- MANIPULANDO ÍNDICES E COMPRIMENTO ---

let itens = ["Monitor", "Teclado", "Mouse"];

console.log(itens[0]); // Monitor
console.log(itens[1]); // Teclado
console.log(itens[2]); // Mouse

// Atualizando o item no índice 0
itens[0] = "WebCam";
console.log(itens);

// Criando um "buraco" no array:
// O array tinha índices 0, 1 e 2. Ao atribuir ao 4, o índice 3 fica vazio (undefined).
itens[4] = "Monitor";
console.log(itens); // ["WebCam", "Teclado", "Mouse", <1 empty item>, "Monitor"]

// Mostra a quantidade de elementos (considerando do índice 0 até o maior)
console.log(itens.length); // 5


// --- MATRIZES (ARRAYS DENTRO DE ARRAYS) ---

let matrizVendas = [
  [100, 200, 300],    // Linha 0
  [400, 500, 50],     // Linha 1 (Loja B)
  [700, 400, 450],    // Linha 2
];



console.log(matrizVendas);    // Mostra a matriz completa
console.log(matrizVendas[1]); // Acessa a linha inteira da Loja B: [400, 500, 50]

// Alterando um valor específico: matriz[linha][coluna]
matrizVendas[1][2] = 500; // Muda o 50 para 500
console.log(matrizVendas[1]);

// Somando valores específicos da matriz
let resultadoLojaB = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];
console.log("Total Loja B:", resultadoLojaB); // 400 + 500 + 500 = 1400