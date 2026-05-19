// =================================================================
// 1. RECEBENDO UMA FUNÇÃO COMO ARGUMENTO (CALLBACK)
// =================================================================

function aplicarOperacao(x, operacao) {
  return operacao(x);
}

function dobrar(numero) {
  return numero * 2;
}

const resultado = aplicarOperacao(5, dobrar); 
console.log(resultado); // Exibe 10


// =================================================================
// 2. RETORNANDO UMA FUNÇÃO (FÁBRICA DE FUNÇÕES / CLOSURE)
// =================================================================

function criarIncrementador(incremento) {
  return function (numero) {
    return numero + incremento;
  };
}

const incrementoPor2 = criarIncrementador(2);
console.log(incrementoPor2(5)); // Exibe 7


// =================================================================
// 3. PARÂMETROS PADRÃO E ARGUMENTOS OPCIONAIS
// =================================================================

// No JavaScript, os argumentos são naturalmente OPCIONAIS. Se você não passar um valor, 
// o JS não quebra o código; ele simplesmente define aquele parâmetro como 'undefined'.
// Para evitar erros (como contas matemáticas resultando em NaN), definimos um VALOR PADRÃO usando o '='.

function criarPerfilUsuario(nome, cargo = "Cliente", ativo = true) {
  // 'nome' é obrigatório (na prática, se não passar, vira undefined)
  // 'cargo' tem o valor padrão de "Cliente"
  // 'ativo' tem o valor padrão de true
  
  return `Usuário: ${nome} | Cargo: ${cargo} | Status: ${ativo ? "Ativo" : "Inativo"}`;
}

// Caso 1: Passando todos os argumentos. Os valores padrões são ignorados.
console.log(criarPerfilUsuario("Daniel", "Administrador", false)); 
// Saída: Usuário: Daniel | Cargo: Administrador | Status: Inativo

// Caso 2: Omitindo os argumentos opcionais. A função usa as "redes de segurança" padrão.
console.log(criarPerfilUsuario("Mariana")); 
// Saída: Usuário: Mariana | Cargo: Cliente | Status: Ativo

// Caso 3: Passando argumentos EXTRA. O JavaScript simplesmente ignora o que sobrar.
console.log(criarPerfilUsuario("Carlos", "Editor", true, "DadoExtraInútil", 123));
// Saída: Usuário: Carlos | Cargo: Editor | Status: Ativo


/*
================================================================
📝 RESUMO DO APRENDIZADO: CONCEITOS AVANÇADOS DE FUNÇÕES
================================================================

1. FUNÇÕES DE ALTA ORDEM (HOF):
   - São funções que tratam outras funções como dados comuns, podendo recebê-las 
     como parâmetros (Callbacks) ou retorná-las como resultado.

2. CALLBACK FUNCTIONS:
   - Funções passadas como argumento para serem executadas mais tarde dentro de outra função.

3. CLOSURE (EFEITO MEMÓRIA):
   - A capacidade de uma função interna "lembrar" do escopo e das variáveis de onde ela nasceu, 
     mesmo depois que a função pai já terminou de rodar.

4. ARGUMENTOS OPCIONAIS:
   - O JavaScript é super flexível. Se você passar MENOS argumentos do que o declarado, os que 
     faltam viram 'undefined'. Se passar MAIS, os extras são ignorados.

5. PARÂMETROS PADRÃO (DEFAULT PARAMETERS):
   - Sintaxe: function minhaFuncao(parametro = valorPadrao)
   - Serve como um plano de fundo amigável. O valor padrão só entra em ação se o argumento 
     correspondente for deixado em branco (omitido) ou se for passado como 'undefined'.
*/