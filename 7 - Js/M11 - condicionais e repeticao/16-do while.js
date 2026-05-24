// DO WHILE
let numero = 1;

do {
  console.log("Número" + numero);
  numero++;
} while (numero <= 5);

console.log("Contagem do.. while foi concluída!");

let funcionariosParaRegistrar = 6; // total

do {
  console.log(
    "Registrando a entrada do funcionário " + funcionariosParaRegistrar
  );
  funcionariosParaRegistrar--; // -1
} while (funcionariosParaRegistrar > 0);

console.log("Nenhum funcionário restante para registrar!");


// Simulador de Reprodução de Filme
let reproduzido = true;
let entrada = ""; // simular trocando o valor para 1 e 2

function reproduzirFilme() {
  console.log("Apertou o play");
}

function pausarFilme() {
  console.log("Filme pausado");
}

function sairFilme() {
  console.log("Saindo do filme");
}

function opcoesConfiguracao(entrada) {
  do {
    console.log("Opções de configuração: 1 - Pausar e 2 - Sair fo filme");
    console.log(`opções: ${entrada}`);

    if (entrada === 1) {
      pausarFilme();
      reproduzido = false;
    } else if (entrada === 2) {
      sairFilme();
      reproduzido = false;
    } else {
      console.log(
        `Opção inválida. Escolha 1 para pausar e 2 para sair do filme`
      );
    }
  } while (reproduzido);
}

//Simular
reproduzirFilme();
opcoesConfiguracao(entrada);
