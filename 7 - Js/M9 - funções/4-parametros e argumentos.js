// =================================================================
// ENTENDENDO PARÂMETROS VS ARGUMENTOS
// =================================================================

// PARÂMETROS: São as variáveis declaradas na definição da função (numero1, numero2).
// Eles funcionam como "valores fictícios" ou "reservas de lugar" aguardando dados reais.
function soma(numero1, numero2) {
  console.log(numero1 + numero2);
}

// ARGUMENTOS: São os valores REAIS que você envia para a função na hora de executá-la.
// Aqui, o 10 assume o lugar de 'numero1' e o 5 assume o lugar de 'numero2'.
soma(10, 5); // Exibe 15 no console


// =================================================================
// FUNÇÕES COM VARIÁVEIS EXTERNAS (E O BUG DA MULTIPLICAÇÃO)
// =================================================================

function calcularPrecoTotal(precoUnitario, quantidade) {
  // ⚠️ AJUSTE LÓGICO FEITO AQUI:
  // No código original estava 'precoUnitario + quantidade' (30 + 3 = 33).
  // Para calcular o total de compras, precisamos MULTIPLICAR o preço pela quantidade (30 * 3 = 90).
  let total = precoUnitario * quantidade; 
  
  console.log("O total da sua compra é: " + total);
}

// Criando variáveis no escopo global para guardar os dados do produto
let camiseta = 30;
let quantidadeItem = 3;

// Passando as variáveis como ARGUMENTOS para a função.
// O JS vai ler o valor dentro delas (30 e 3) e enviar para a função calcular.
calcularPrecoTotal(camiseta, quantidadeItem);


/*
================================================================
📝 RESUMO DO APRENDIZADO SOBRE FUNÇÕES
================================================================

1. DEFINIÇÃO DA FUNÇÃO: É onde você cria a "receita". Ela não roda sozinha, 
   apenas fica guardada na memória do computador esperando ser chamada.
   
2. PARÂMETROS VS ARGUMENTOS: 
   - Parâmetro é o nome da "gaveta" dentro da função (ex: precoUnitario).
   - Argumento é o que você "guarda" na gaveta ao chamar a função (ex: camiseta / 30).

3. PASSAGEM DE VALORES: Você pode passar valores direto (como 'soma(10, 5)') 
   ou passar variáveis que contêm esses valores (como 'calcularPrecoTotal(camiseta, quantidadeItem)').

4. ATENÇÃO À LÓGICA: O JavaScript faz exatamente o que mandamos. Se pedirmos para somar 
   o preço com a quantidade, ele vai somar. Sempre revise os operadores matemáticos (+, -, *, /).
*/