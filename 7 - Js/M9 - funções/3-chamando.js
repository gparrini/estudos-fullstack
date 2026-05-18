// ==========================================
// REUTILIZAÇÃO COM PARÂMETROS DINÂMICOS
// ==========================================

// Definindo a função que exibe os detalhes.
// Ela espera receber dois dados: o 'nome' do professor e o 'curso'.
function exibirDetalhes(nome, curso) {
  // 💡 AJUSTE DE ESPAÇO: No código original, "Curso:" ficava colado no nome do professor (ex: LiraCurso: Python).
  // Adicionei um " | " e espaços para o texto respirar melhor no terminal!
  console.log("Professor: " + nome + " | Curso: " + curso); 
}

// CHAMADAS DA FUNÇÃO:
// Aqui está a mágica! Chamamos a mesma função 4 vezes. 
// O código dentro dela roda 4 vezes, mas cada vez com um resultado diferente.
exibirDetalhes("Lira", "Python");       // nome = "Lira", curso = "Python"
exibirDetalhes("Daniel", "Javascript"); // nome = "Daniel", curso = "Javascript"
exibirDetalhes("Alon", "Power BI");     // nome = "Alon", curso = "Power BI"
exibirDetalhes("Fred", "Excel");        // nome = "Fred", curso = "Excel"


// ==========================================
// REUTILIZAÇÃO DE CÓDIGO ESTÁTICO
// ==========================================

// Esta função não recebe parâmetros (as gavetas estão vazias) e não retorna nada.
// Ela serve puramente para repetir uma ação fixa.
function mensagem() {
  console.log("Imprimindo uma mensagem!");
}

// Chamando a função 5 vezes seguidas.
// Vantagem: se amanhã você quiser mudar o texto para "Mensagem impressa!", 
// você só altera a linha 20 (dentro da função), e não 5 linhas diferentes.
mensagem();
mensagem();
mensagem();
mensagem();
mensagem();