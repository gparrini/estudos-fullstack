// =========================================================================
// JavaScript Impressionador - Módulo 5 - Estruturas Condicionais e de Repetição
// Exercícios com Gabarito
// Data: 2023-09-22
// =========================================================================

// -------------------------------------------------------------------------
// IF / ELSE:
// -------------------------------------------------------------------------

/**
 * Exercício 1: Verificação de Desconto
 * * Crie um programa verifica Desconto que verifique se um cliente tem direito a um desconto.
 * Se o valor da compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%.
 * Caso contrário, nenhum desconto é aplicado. O programa deve imprimir mensagens que 
 * retornem se o cliente possui ou não o direito de retorno e o valor da compra no console.
 */

function verificaDesconto(valorDaCompra) {
    if (valorDaCompra >= 100) {
        console.log("Parabéns! Você tem direito a um desconto de 10%.");
        const valorComDesconto = valorDaCompra * 0.9;
        console.log(`Valor com desconto: R$ ${valorComDesconto}`);
    } else {
        console.log("Desculpe, você não tem direito a nenhum desconto.");
        console.log(`Valor da compra: R$ ${valorDaCompra}`);
    }
}

// Exemplo de uso:
const valorDaCompra = 80;   // Altere este valor conforme necessário
const valorDaCompra2 = 120; // Altere este valor conforme necessário

verificaDesconto(valorDaCompra);
verificaDesconto(valorDaCompra2);


/**
 * Exercício 2: Verificação de Produto em Estoque
 * * Escreva um programa verificarEstoque que verifica se um produto está em estoque com 
 * base na quantidade disponível.
 * Se a quantidade disponível for maior que zero, exiba "Produto disponível", 
 * caso contrário, exiba "Produto esgotado" no console.
 */

function verificarEstoque(quantidadeDisponivel) {
    if (quantidadeDisponivel > 0) {
        return "Produto disponível.";
    } else {
        return "Produto esgotado.";
    }
}

// Exemplo de uso:
const quantidadeExemplo = 5;  // Altere este valor conforme necessário
const quantidadeExemplo2 = 0; // Altere este valor conforme necessário

console.log(verificarEstoque(quantidadeExemplo));
console.log(verificarEstoque(quantidadeExemplo2));


// -------------------------------------------------------------------------
// IF/ELSE IF / ELSE:
// -------------------------------------------------------------------------

/**
 * Exercício 3: Determinação de Categoria de Cliente
 * * Escreva um programa categoriaCliente que determine a categoria de um cliente com 
 * base em sua pontuação de fidelidade, que será entre 0 e 100. Se a pontuação for 
 * maior ou igual a 85, o cliente é categorizado como "Cliente Premium".
 * Se for maior ou igual a 50, é categorizado como "Cliente Regular". 
 * Caso contrário, é categorizado como "Cliente Comum".
 */

function categoriaCliente() {
    const pontuacaoFidelidade = Math.floor(Math.random() * 101); // Gerar uma pontuação aleatória entre 0 e 100
    console.log(`Sua pontuação de fidelidade é: ${pontuacaoFidelidade}`);

    if (pontuacaoFidelidade >= 85) {
        console.log("Você é um Cliente Premium.");
    } else if (pontuacaoFidelidade >= 50) {
        console.log("Você é um Cliente Regular.");
    } else {
        console.log("Você é um Cliente Comum.");
    }
}

categoriaCliente();


/**
 * Exercício 4: Classificação de Desempenho de Vendas
 * * Você está gerenciando uma equipe de vendedores e deseja avaliar o desempenho de 
 * cada vendedor com base em suas vendas mensais em relação a uma meta estabelecida.
 * Escreva um programa desempenhoIndividualDeVendas que determine a categoria de 
 * desempenho de um vendedor com base no percentual alcançado em relação à meta.
 * * As categorias incluem "Excelente Desempenho" (para vendedores que alcançaram ou 
 * excederam a meta), "Muito Bom Desempenho" (para vendedores com vendas entre 90% e 
 * 99% da meta), "Bom Desempenho" (para vendedores com vendas entre 80% e 89% da meta), 
 * "Desempenho Satisfatório" (para vendedores com vendas entre 61% e 79% da meta) e 
 * "Desempenho Insatisfatório" (para vendedores com vendas abaixo de 60% da meta).
 * * Execute o código e informe a categoria de desempenho do vendedor com base nas 
 * vendas mensais e na meta de vendas estabelecida.
 */

function desempenhoIndividualDeVendas(vendasMensais, metaDeVendas) {
    const percentualAlcancado = (vendasMensais / metaDeVendas) * 100;

    if (percentualAlcancado >= 100) {
        return "Excelente Desempenho";
    } else if (percentualAlcancado >= 90 && percentualAlcancado < 100) {
        return "Muito Bom Desempenho";
    } else if (percentualAlcancado >= 80 && percentualAlcancado < 90) {
        return "Bom Desempenho";
    } else if (percentualAlcancado >= 61 && percentualAlcancado < 80) {
        return "Desempenho Satisfatório";
    } else {
        return "Desempenho Insatisfatório";
    }
}

// Exemplo de uso:
const vendasMensais = 7500;  // Altere este valor conforme necessário
const metaDeVendas = 10000;  // Altere este valor conforme necessário

const categoriaDesempenho = desempenhoIndividualDeVendas(vendasMensais, metaDeVendas);

console.log(`Categoria de Desempenho: ${categoriaDesempenho}`);
console.log(`Vendas Mensais: R$ ${vendasMensais}`);
console.log(`Meta de Vendas: R$ ${metaDeVendas}`);


// -------------------------------------------------------------------------
// OPERADOR TERNÁRIO:
// -------------------------------------------------------------------------

/**
 * Exercício 5: Verificação de Velocidade
 * * Crie uma função chamada verificarVelocidade que recebe a velocidade de um veículo 
 * como argumento e retorna true se o veículo estiver dentro do limite de velocidade 
 * (limite igual ou inferior a 80 km/h) e false caso contrário, utilizando o operador ternário.
 */

function verificarVelocidade(velocidade) {
    const dentroDoLimite = velocidade <= 80 ? true : false;
    return dentroDoLimite;
}

// Exemplo de uso:
const velocidadeExemplo = 75; // Altere a velocidade conforme necessário
const dentroDoLimite = verificarVelocidade(velocidadeExemplo);
console.log(`Dentro do limite de velocidade? ${dentroDoLimite}`);


/**
 * Exercício 6: Semáforo de Trânsito
 * * Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento 
 * (por exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando 
 * a ação a ser tomada com base na cor do semáforo.
 * Utilize o operador ternário para determinar a mensagem.
 */

function mensagemSemaforo(corSemaforo) {
    const mensagem = corSemaforo === "vermelho"
        ? "Pare o veículo imediatamente!"
        : corSemaforo === "amarelo"
        ? "Reduza a velocidade e pare se seguro."
        : corSemaforo === "verde"
        ? "Você pode continuar com cuidado."
        : "Cor do semáforo desconhecida. Siga com atenção.";
    
    return mensagem;
}

// Exemplo de uso:
const corSemaforoExemplo = "verde"; // Altere a cor do semáforo conforme necessário
const mensagem = mensagemSemaforo(corSemaforoExemplo);
console.log(mensagem);


// -------------------------------------------------------------------------
// SWITCH/CASE:
// -------------------------------------------------------------------------

/**
 * Exercício 7: Prioridade no Trânsito
 * * Crie uma função chamada coresDoSemaforo que recebe uma cor de semáforo como 
 * argumento (por exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem 
 * indicando se é seguro passar ou se é necessário parar.
 */

function coresDoSemaforo(corSemaforo) {
    let mensagem;

    switch (corSemaforo) {
        case "vermelho":
            mensagem = "Pare o veículo imediatamente!";
            break;
        case "amarelo":
            mensagem = "Reduza a velocidade e pare se seguro.";
            break;
        case "verde":
            mensagem = "Você pode continuar com cuidado.";
            break;
        default:
            mensagem = "Cor do semáforo desconhecida. Siga com atenção.";
    }

    return mensagem;
}

// Exemplo de uso:
const corSemaforoExemplo2 = "verde"; // Altere a cor do semáforo conforme necessário
console.log(coresDoSemaforo(corSemaforoExemplo2));


/**
 * Exercício 8: Verificação de Placa de Veículo
 * * Crie uma função verificarPlaca que recebe o último dígito da placa de um veículo 
 * como argumento (um número de 0 a 9) e retorna uma mensagem indicando o dia de 
 * rodízio em São Paulo, com base no último dígito da placa.
 */

function verificarPlaca(ultimoDigitoPlaca) {
    let diaRodizio;

    switch (ultimoDigitoPlaca) {
        case 1:
        case 2:
            diaRodizio = "Segunda-feira";
            break;
        case 3:
        case 4:
            diaRodizio = "Terça-feira";
            break;
        case 5:
        case 6:
            diaRodizio = "Quarta-feira";
            break;
        case 7:
        case 8:
            diaRodizio = "Quinta-feira";
            break;
        case 9:
        case 0:
            diaRodizio = "Sexta-feira";
            break;
        default:
            diaRodizio = "Placa inválida";
    }

    return `O dia de rodízio é na ${diaRodizio}.`;
}

// Exemplo de uso:
const ultimoDigitoPlacaExemplo = 3; // Altere o dígito conforme necessário
console.log(verificarPlaca(ultimoDigitoPlacaExemplo));