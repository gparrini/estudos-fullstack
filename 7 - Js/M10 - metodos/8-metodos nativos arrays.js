// =================================================================
// 1. MANIPULANDO O INÍCIO E O FIM DA LISTA (FILA E PILHA)
// =================================================================

let produtos = ["Carrinho", "Boneca", "Bola"];

// push(): Adiciona um ou mais elementos no FINAL da lista.
produtos.push(50, 10, 30); 
console.log(produtos); // ["Carrinho", "Boneca", "Bola", 50, 10, 30]

// unshift(): Adiciona um elemento no INÍCIO da lista (empurra os outros para frente).
// ⚠️ CORREÇÃO: Estava 'console, log'. Ajustado para o ponto correto.
produtos.unshift("Video Game"); 
console.log(produtos); // ["Video Game", "Carrinho", "Boneca", "Bola", 50, 10, 30]

// pop(): Remove o ÚLTIMO elemento da lista e o devolve (caso queira guardar em uma variável).
produtos.pop(); 
console.log(produtos); // O número 30 foi removido do final

// shift(): Remove o PRIMEIRO elemento da lista e puxa todos os outros para trás.
produtos.shift(); 
console.log(produtos); // "Video Game" foi removido do início


// =================================================================
// 2. ORDENAÇÃO E INVERSÃO (MUTA A LISTA ORIGINAL)
// =================================================================

let letras = ["d", "g", "a", "h", "b", "f", "c", "e"];
let numeros = [1, 6, 5, 4, 10, 8, 20, 19, 3];

// sort() com letras: Funciona perfeitamente em ordem alfabética!
letras.sort(); 
console.log(letras); // ["a", "b", "c", "d", "e", "f", "g", "h"]

// reverse(): Inverte a ordem atual dos elementos da lista.
letras.reverse(); 
console.log(letras); // ["h", "g", "f", "e", "d", "c", "b", "a"]

// ⚠️ ATENÇÃO À PEGADINHA DO SORT() COM NÚMEROS:
// Por padrão, o sort() converte os números em TEXTO antes de ordenar. 
// Para o JS, o texto "10" vem antes do texto "3" (porque começa com 1).
numeros.sort();
console.log(numeros); // Resultado bizarro: [1, 10, 19, 20, 3, 4, 5, 6, 8]

// O reverse aqui vai apenas inverter o resultado bizarro anterior.
numeros.reverse();
console.log(numeros); 


// =================================================================
// 3. CONCATENAÇÃO, BUSCA E MODIFICAÇÃO CIRÚRGICA
// =================================================================

// concat(): Junta duas listas criando uma nova, sem alterar as originais.
let mesclaArray = letras.concat(numeros);
console.log(mesclaArray);

let frutas = ["maça", "uva", "laranja"];

// indexOf(): Procura o elemento e diz em qual índice (posição) ele está.
console.log(frutas.indexOf("laranja")); // Retorna 2

// splice(índice_início, quantidade_deletar, itens_para_adicionar)
// Aqui: na posição 2 ("laranja"), remova 1 item ("laranja") e coloque o número 10 no lugar.
console.log(frutas.splice(2, 1, 10)); // O console mostra o item que FOI REMOVIDO (["laranja"])
console.log(frutas); // A lista agora é: ["maça", "uva", 10]


// =================================================================
// 4. MÉTODOS DE BUSCA AVANÇADOS E VALIDAÇÃO (HOFs)
// =================================================================

// ⚠️ CORREÇÃO: Você já tinha criado 'let frutas' lá em cima. Redecorá-la causaria um erro.
// Mudamos o nome desta segunda lista para 'novasFrutas'.
let novasFrutas = ["maça", "melão", "manga", "kiwi"];

// includes(): Uma pergunta direta de sim ou não (retorna true ou false).
console.log(novasFrutas.includes("manga")); // true (existe na lista)
console.log(novasFrutas.includes(50));      // false (não existe na lista)

// every(): "TODOS os elementos passam nesse teste?" 
// Testa se TODAS as strings da lista contêm as letras "ma".
console.log(
  novasFrutas.every(function (fruta) {
    return fruta.includes("ma");
  })
); // false (pois "melão" e "kiwi" não têm "ma")

// some(): "PELO MENOS UM elemento passa nesse teste?"
// Testa se ALGUMA fruta da lista contém a letra "k".
console.log(
  novasFrutas.some(function (fruta) {
    return fruta.includes("k");
  })
); // true (pois "kiwi" começa com k)


// =================================================================
// 5. TRANSFORMAÇÃO: DE ARRAY PARA STRING
// =================================================================

// join(): Une todos os elementos da lista em uma única String, separando-os pelo termo escolhido.
console.log(novasFrutas.join(" outra palavra ")); 
// Saída: "maça outra palavra melão outra palavra manga outra palavra kiwi"