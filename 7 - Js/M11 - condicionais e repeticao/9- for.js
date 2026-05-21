// =================================================================
// 1. BANCO DE DADOS SIMULADO (ARRAY DE OBJETOS)
// =================================================================

// Temos um Array (lista) chamado 'funcionarios'. Cada item dentro dele é um Objeto {}.
let funcionarios = [
  { nome: "João", categoria: "veterinário", salario: 3500, disponivel: true },
  { nome: "Maria", categoria: "administrativo", salario: 1800, disponivel: true },
  { nome: "Ricardo", categoria: "tratador", salario: 2500, disponivel: false },
  { nome: "Renata", categoria: "tratador", salario: 2500, disponivel: false },
  { nome: "Paulo", categoria: "veterinário", salario: 2500, disponivel: false },
];


// =================================================================
// 2. FILTRANDO DADOS COM LOOP E CONDICIONAL
// =================================================================

// Função que varre a lista e exibe apenas os funcionários da categoria escolhida
function listarFuncionariosCategoria(categoria) {
  console.log(`\n--- Funcionários na categoria: ${categoria} ---`);
  
  // ⚠️ AJUSTE: No seu código original estava (index, funcionario.length). 
  // Corrigimos para o operador de comparação '<' e adicionamos o 's' em 'funcionarios' (plural).
  for (let index = 0; index < funcionarios.length; index++) {
    
    // Como ler essa linha: "Se o funcionário da vez (posição 'index') tiver a categoria igual à que eu pedi..."
    if (funcionarios[index].categoria === categoria) {
      console.log(funcionarios[index].nome); // Imprime o nome dele
    }
  }
}

// Executando a função: ela vai rodar o loop 5 vezes, mas só vai imprimir Ricardo e Renata.
listarFuncionariosCategoria("tratador");


// =================================================================
// 3. ACUMULANDO VALORES (PADRÃO ACUMULADOR)
// =================================================================

// Função para somar todos os salários do zoológico
function calcularSalario() {
  let totalSalarios = 0; // Começamos o cofrinho zerado

  for (let i = 0; i < funcionarios.length; i++) {
    // O operador '+=' pega o valor atual do cofrinho e soma com o salário do funcionário da vez
    totalSalarios += funcionarios[i].salario;
  }

  return totalSalarios; // Devolve o valor total somado (12800)
}

console.log("\nTotal gasto em salários:", calcularSalario());


// =================================================================
// 4. CONTANDO ITENS E A PEGADINHA DO 'RETURN'
// =================================================================

// Função para contar quantos funcionários estão com o status 'disponivel: true'
function funcionariosDisponiveis() {
  let contador = 0;

  for (let index = 0; index < funcionarios.length; index++) {
    // 🧠 DICA: 'if (propriedadeBooleana)' já checa automaticamente se ela é verdadeira.
    // Não precisamos escrever '=== true'.
    if (funcionarios[index].disponivel) {
      contador++; // Achou um disponível? Soma +1 no contador
    }
    
    // ⚠️ AJUSTE CRUCIAL: No seu código original, a linha abaixo estava DENTRO do loop 'for'.
    // Se o 'return' ficar dentro do loop, o JavaScript encerra a função logo na primeira volta!
    // Mudamos ela para fora das chaves do 'for', para que ele termine de ler toda a lista antes de responder.
  }
  
  return contador; // Agora sim, retorna o total após olhar todos os funcionários (2)
}

console.log("Funcionários disponíveis:", funcionariosDisponiveis());


// =================================================================
// 5. VARIAÇÕES E FLEXIBILIDADE DO LAÇO FOR
// =================================================================

console.log("\n--- Listando Produtos ---");
let produtos = ["Camiseta", "Calça", "Boné", "Meias"];

// Um laço 'for' tradicional tem 3 partes: for(inicialização; condição; incremento)
// Mas o JavaScript permite omitir partes se você controlar o fluxo manualmente.

// Exemplo: Omitindo a condição da assinatura do 'for' e usando o 'break' para fugir.
for (let index = 0; ; index++) {
  
  // Criamos uma condição de parada manual dentro do loop:
  // Se o índice chegar ao tamanho máximo da lista (4), pare imediatamente.
  if (index >= produtos.length) {
    break; // 🛑 O 'break' quebra o loop e joga o código para fora dele.
  }
  
  // Imprime o produto (somamos +1 no index apenas visualmente para o humano não ver "Produto 0")
  console.log("Produto " + (index + 1) + ": " + produtos[index]);
}


// =================================================================
// 6. O PERIGO DOS LOOPS INFINITOS (CÓDIGOS COMENTADOS)
// =================================================================

// Se você deixar um loop rodando sem nenhuma condição de parada,
// o computador vai processar aquilo o mais rápido possível até faltar memória
// e travar o navegador ou o sistema.

// Exemplo 1: Não tem inicialização, não tem condição e não tem incremento.
// for (;;) { console.log("Loop Infinito"); }

// Exemplo 2: O index cresce para sempre (0, 1, 2, 3...) e nunca mandamos ele parar.
// for (let index = 0; ; index++) { console.log("Loop Infinito"); }

// Exemplo 3: A variável 'i' começa valendo 4. O loop diz: "Rode enquanto i for menor ou igual a 3".
// Como 4 nunca é menor ou igual a 3, esse loop simplesmente NUNCA vai rodar nenhuma vez!
let i = 4;
for (; i <= 3; ) {
   console.log("Isso nunca vai aparecer na tela");
}

console.log("\nSai do exemplo de teste de loop.");