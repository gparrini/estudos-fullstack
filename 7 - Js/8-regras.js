let nomeProduto = "Boné";
let precoProduto = 50;
let quantidade = 3;

let minhaPrimeiraMensagem = "Olá, seja bem vindo!"; //Camel case: a primeira palavra é minúscula e as seguintes começam com maiúscula.
// const const = "Isso não é uma boa prática";

/**
 * APLICAÇÃO DE BOAS PRÁTICAS EM JAVASCRIPT
 */

// h. Constantes: Nomes em MAIÚSCULO com underscore (Screaming Snake Case)
// Elas representam valores que nunca mudam durante a execução.
const PI = 3.1415;
const MAX_LOGIN_ATTEMPTS = 5;
const API_URL = "https://api.exemplo.com.br";

// a. Nomes Significativos & b. camelCase
// Em vez de 'l', usamos 'listaDeUsuarios'. Em vez de 'n', 'nomeCompleto'.
let nomeCompleto = 'Millene Silva'; 
let idadeUsuario = 25;
let estaLogado = true; // Booleano geralmente começa com "eh", "tem", "esta"

// f. Uso de Aspas (Consistência)
// Escolha uma e siga. Aqui usaremos aspas simples para texto comum...
let saudacao = 'Olá, seja bem-vinda!';

// ...e aspas duplas quando o texto já possui aspas simples dentro.
let mensagemDeErro = "Ocorreu um erro no 'login' do sistema.";

// d. Regras de Início de Variável
let _idInterno = 1023;   // Permitido começar com _
let $elementoDinamico = 'div'; // Comum em bibliotecas como jQuery
// let 1lugar = "Ouro";  // ERRO: Não pode começar com número!
let lugar1 = "Ouro";     // Permitido: número no final

// g. Uso do Ponto e Vírgula (;)
// Embora opcional em muitos casos, usá-los evita bugs de interpretação.
function calcularDesconto(precoBase, percentual) {
  let valorDesconto = precoBase * (percentual / 100);
  return precoBase - valorDesconto;
} // <-- Fim do bloco de função não precisa obrigatoriamente de ;

// Executando a função e usando ; para terminar a instrução
let precoFinal = calcularDesconto(100, 15);
console.log(precoFinal); // 85;

// c. Palavras Reservadas
// let function = "teste"; // ERRO: 'function' é uma palavra reservada da linguagem.
// Use sinônimos ou nomes compostos:
let funcaoPrincipal = "teste"; 

// e. camelCase (JS) vs snake_case (Outras linguagens)
let variavelPadraoJS = "Seguindo o camelCase"; // RECOMENDADO EM JS
let variavel_padrao_python = "Seguindo o snake_case"; // EVITE EM JS (exceto constantes)