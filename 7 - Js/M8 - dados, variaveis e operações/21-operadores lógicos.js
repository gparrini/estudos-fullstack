// --- OPERADORES LÓGICOS ---
// São usados para combinar ou inverter valores booleanos (true ou false).

// && (AND - Operação "E"):
// Retorna verdadeiro SOMENTE SE todas as condições forem verdadeiras.
// Exemplo: Para entrar na festa, precisa ter o convite E ser maior de idade.
let temConvite = true;
let maiorDeIdade = false;
let podeEntrar = temConvite && maiorDeIdade; // Resultado: false (falta um requisito)

// || (OR - Operação "OU"):
// Retorna verdadeiro se PELO MENOS UMA das condições for verdadeira.
// Exemplo: Você pode pagar com dinheiro OU cartão. Se tiver um dos dois, a compra é aceita.
let temDinheiro = true;
let temCartao = false;
let podeComprar = temDinheiro || temCartao; // Resultado: true (um dos requisitos foi atendido)
console.log("Posso comprar? " + podeComprar); // Exibe: Posso comprar? true

// ! (NOT - Inversor):
// Ele inverte o valor booleano. O que é true vira false, e o que é false vira true.
let usuarioLogado = true;
let exibirBotaoLogin = !usuarioLogado; // Resultado: false (se ele está logado, não preciso mostrar o botão de login)

// --- EXEMPLO PRÁTICO: SISTEMA DE LOGIN ---
let senha = 1234;
let senhaDigitada = 1234;
let loginValido = senha === senhaDigitada; // Resultado: true (as senhas coincidem)
console.log("Login válido? " + loginValido); // Exibe: Login válido? true

// Código da Hashtag:
// & (AND) - ambas as condições são verdadeiras.
let idade = 20;
let condigoPromocional = true;

let idade2 = 15;

//Verificação se o usuário tem idade suficiente e possui um código
let podeFazerLogin = idade >= 18 && condigoPromocional; // true
console.log(podeFazerLogin);

let podeFazerLogin2 = idade2 >= 18 && condigoPromocional; // false;
console.log(podeFazerLogin2);

// || (OR) - apenas uma condição é verdadeira.
let loginOr = idade >= 18 || condigoPromocional; // true;
let loginOr2 = idade2 >= 18 || condigoPromocional; // true;
console.log(loginOr);
console.log(loginOr2);

let promocional = false;
console.log(idade2 >= 18 || promocional); // false;

// ! (NOT) inverte valor booleano
let perfilConfigurado = false;

//Verificação se o perfil não está configurado
let alerta = !perfilConfigurado;
console.log(alerta);