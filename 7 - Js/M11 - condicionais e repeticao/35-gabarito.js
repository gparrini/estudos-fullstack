// =========================================================================
// JavaScript Impressionador - Módulo 5 - Estruturas Condicionais e de Repetição
// Exercícios com Gabarito
// Data: 2023-09-26
// =========================================================================

// -------------------------------------------------------------------------
// RECURSIVIDADE:
// -------------------------------------------------------------------------

/**
 * Exercício 1: Contagem de Itens do Cardápio (Recursivo)
 * * Você é o gerente de uma lanchonete e deseja contar quantos itens diferentes estão no seu cardápio.
 * Crie uma função recursiva em JavaScript que conte quantos itens diferentes existem no cardápio da lanchonete.
 */

// Array que representa o cardápio da lanchonete
const cardapioLanchonete = [
    "Hambúrguer",
    "Batata Frita",
    "Refrigerante",
    "Milkshake",
    "Hot Dog",
    "Cachorro-Quente",
    "Pizza"
];

// Função recursiva para contar os itens do cardápio
function contarItensDoCardapio(cardapio) {
    // Condição de parada: Se o cardápio estiver vazio (não há mais itens),
    // retornamos 0 para encerrar a recursão.
    if (cardapio.length === 0) {
        return 0;
    } else {
        cardapio.pop(); // Remove o último item do cardápio (para simplificar a contagem)
        // Chamada recursiva: Incrementamos 1 e continuamos a contar os itens do cardápio restante.
        return 1 + contarItensDoCardapio(cardapio);
    }
}

// Chamamos a função para contar os itens do cardápio
const totalItens = contarItensDoCardapio([...cardapioLanchonete]); // Passando uma cópia para não esvaziar o array original definitivo
// Exibimos o resultado
console.log(`Total de itens no cardápio: ${totalItens}`);


/**
 * Exercício 2: Cálculo do Valor Total das Vendas (Recursivo)
 * * Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de um mês.
 * Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do mês.
 * Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.
 */

function calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, dia) {
    // Condição de parada: Se o dia for maior ou igual ao número de dias no mês,
    // retornamos 0 para encerrar a recursão.
    if (dia >= vendasDiarias.length) {
        return 0;
    }
    
    // Calcula o valor das vendas para o dia atual e chama recursivamente para o próximo dia.
    const valorVendaDiaAtual = vendasDiarias[dia] * precoPorHamburguer;
    const valorVendaProximoDia = calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, dia + 1);
    
    // Retorna a soma do valor do dia atual com o valor das vendas dos dias seguintes.
    return valorVendaDiaAtual + valorVendaProximoDia;
}

const vendasDiarias = [
    20, 15, 25, 18, 22, 30, 28, 24, 27, 22, 
    18, 24, 25, 30, 28, 27, 29, 26, 23, 19, 
    21, 26, 17, 16, 29, 31, 14, 20, 21, 17
];
const precoPorHamburguer = 10;

const totalVendasMes = calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, 0); // Começamos no primeiro dia (índice 0)
console.log(`O valor total das vendas de hambúrgueres no mês é R$ ${totalVendasMes}`);


// -------------------------------------------------------------------------
// FOR IN:
// -------------------------------------------------------------------------

/**
 * Exercício 3: Listagem de Itens do Cardápio
 * * Você é o gerente de uma lanchonete e deseja listar os itens do cardápio para exibição.
 * Os itens do cardápio são armazenados em um objeto onde as chaves são os nomes dos itens e os valores são os preços.
 * Crie um programa que use um loop for...in para listar todos os itens do cardápio juntamente com seus preços.
 */

const cardapioEx3 = {
    "Hambúrguer": 10,
    "Batata Frita": 5,
    "Refrigerante": 2,
    "Milkshake": 7
};

function listarItensDoCardapioIn(cardapio) {
    for (const item in cardapio) {
        console.log(`${item}: R$ ${cardapio[item]}`);
    }
}
listarItensDoCardapioIn(cardapioEx3);


/**
 * Exercício 4: Calcular o Total da Conta
 * * Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um cliente.
 * Crie um programa que use um loop for...in para percorrer o pedido do cliente (um objeto com itens e quantidades) 
 * e calcule o valor total da conta.
 */

const cardapioEx4 = {
    "Hambúrguer": 10,
    "Batata Frita": 5,
    "Refrigerante": 2,
    "Milkshake": 7
};

const pedidoClienteEx4 = {
    "Hambúrguer": 2,
    "Batata Frita": 1,
    "Refrigerante": 3
};

function calcularTotalDaContaIn(cardapio, pedidoCliente) {
    let totalConta = 0;
    for (const item in pedidoCliente) {
        if (item in cardapio) {
            totalConta += cardapio[item] * pedidoCliente[item];
        }
    }
    return totalConta;
}

const totalContaEx4 = calcularTotalDaContaIn(cardapioEx4, pedidoClienteEx4);
console.log(`Total da conta: R$ ${totalContaEx4}`);


// -------------------------------------------------------------------------
// FOR OF:
// -------------------------------------------------------------------------

/**
 * Exercício 5: Listagem de Itens do Cardápio
 * * Reutilizando o cardápio da lanchonete armazenado em um array do exercício 1, crie um programa que use 
 * um loop for...of para listar todos os itens do cardápio.
 */

function listarItensDoCardapioOf(cardapio) {
    for (const item of cardapio) {
        console.log(item);
    }
}

const cardapioLanchoneteEx5 = [
    "Hambúrguer",
    "Batata Frita",
    "Refrigerante",
    "Milkshake",
    "Hot Dog",
    "Cachorro-Quente",
    "Pizza"
];

listarItensDoCardapioOf(cardapioLanchoneteEx5);


/**
 * Exercício 6: Calcular o Total da Conta
 * * Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um cliente.
 * Os itens do pedido estão armazenados em um array de objetos, onde cada objeto tem o nome do item e a quantidade.
 * Crie um programa que use um loop for...of para percorrer o pedido do cliente e calcule o valor total da conta.
 */

const cardapioEx6 = {
    "Hambúrguer": 10,
    "Batata Frita": 5,
    "Refrigerante": 2,
    "Milkshake": 7
};

const pedidoClienteEx6 = [
    { nome: "Hambúrguer", quantidade: 2 },
    { nome: "Batata Frita", quantidade: 1 },
    { nome: "Refrigerante", quantidade: 3 }
];

function calcularTotalDaContaOf(cardapio, pedidoCliente) {
    let totalConta = 0;
    for (const pedido of pedidoCliente) {
        if (pedido.nome in cardapio) {
            totalConta += cardapio[pedido.nome] * pedido.quantidade;
        }
    }
    return totalConta;
}

const totalContaEx6 = calcularTotalDaContaOf(cardapioEx6, pedidoClienteEx6);
console.log(`Total da conta: R$ ${totalContaEx6}`);