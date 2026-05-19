// =================================================================
// TRABALHANDO COM MÉTODOS DE STRINGS
// =================================================================

// ⚠️ CORREÇÃO: Mudamos de 'let String' para 'let frase'. 
// Não use 'String' com "S" maiúsculo para dar nome a variáveis, pois 'String' é uma palavra 
// reservada do próprio JavaScript.
let frase = "Olá, Mundo!";

// 1. Alterando a capitalização (Caixa alta e baixa)
console.log(frase.toUpperCase()); // "OLÁ, MUNDO!" -> Transforma tudo em maiúsculo
console.log(frase.toLowerCase()); // "olá, mundo!" -> Transforma tudo em minúsculo


// 2. Método slice(início, fim) - Corta uma parte da string
// O caractere na posição 'fim' NÃO é incluído no corte.
console.log(frase.slice(0, 5));   // "Olá, " -> Pega do índice 0 até o 4.
console.log(frase.slice(-6));    // "Mundo!" -> Índices negativos contam de trás para frente.


// 3. Método substring(início, fim) - Muito parecido com o slice, mas com duas regras curiosas:
console.log(frase.substring(0, 5)); // "Olá, " -> Comportamento normal.

// Curiosidade 1: O substring não aceita números negativos. Se você passar -6, ele converte para 0.
// Curiosidade 2: Se o início for maior que o fim, ele inverte os valores automaticamente!
console.log(frase.substring(7, 3)); // É lido como (3, 7) -> Retorna ", Mu"


// 4. Método replace(procurar, substituirPor)
// Substitui a primeira ocorrência do texto encontrado por um novo texto.
console.log(frase.replace("Mundo", "Javascript")); // "Olá, Javascript!"
console.log(frase); // "Olá, Mundo!" -> Veja como a string original continuou intacta!


// 5. Método indexOf(caractere)
// Retorna a posição (índice) da primeira vez que o caractere aparece. Lembrando que o JS diferencia 'o' de 'O'.
console.log(frase.indexOf("o")); // Retorna 9 (posição do 'o' minúsculo de Mundo)


// =================================================================
// DE STRING PARA ARRAY: MÉTODO SPLIT
// =================================================================

let texto = "maçã,banana,laranja,uvas";

// ⚠️ CORREÇÃO: No seu código estava 'texto.split(/\s+/)'. Como o seu texto é separado por vírgulas 
// e não por espaços (\s), o JS não saberia onde cortar. 
// Mudamos para o delimitador correto: a vírgula ",".
let frutas = texto.split(","); 

// O split corta a string nas vírgulas e joga os pedaços dentro de uma Lista (Array)
console.log(frutas); // Saída: ["maçã", "banana", "laranja", "uvas"]


// =================================================================
// MÉTODO DE ARRAY (BÔNUS): SPLICE
// =================================================================

// ⚠️ ATENÇÃO: O 'splice' é um método de ARRAY (listas), não de String.
// Diferente dos métodos de string, o splice ALTERA a lista original de verdade!
// Sintaxe: frutas.splice(índice_inicial, quantidade_para_deletar)

frutas.splice(1, 2); // A partir da posição 1 ("banana"), delete 2 elementos ("banana" e "laranja").

console.log(frutas); // Saída: ["maçã", "uvas"] -> A lista original foi modificada!