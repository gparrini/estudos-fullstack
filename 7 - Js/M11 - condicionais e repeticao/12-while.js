// While
let numero = 1;

while (numero <= 5) {
  console.log("Número: " + numero);
  numero++; // numero + 1
}

console.log("Contagem com while concluída!");

let funcionariosRegistrados = 0;

while (funcionariosRegistrados < 3) {
  console.log(
    "Funcionário " + (funcionariosRegistrados = 1) + " registrou suas horas."
  );
  funcionariosRegistrados++;
}

console.log("Fim de registro");


// Simulador de aplicativo de corrida
let nome = "João";
let partida = "Avenida Paulista";
let destino = "Parque Ibirapuera";

function registrar(nome) {
  while (true) {
    if (nome === "") {
      console.log("Preencha com o nome");
      break;
    } else if (typeof nome !== "string") {
      console.log("Nome inválido, preencha novamente!");
      break;
    } else {
      console.log(`Usuário ${nome} registrado com sucesso!`);
      break;
    }
  }

  // instruções
  selecionar(partida, destino);
}

// registrar(nome);

function selecionar(partida, destino) {
  console.log("Selecionar o local de partida e destino");

  while (partida !== destino) {
    if (partida === "" || typeof partida !== "string") {
      console.log("Local de partida precisa ser informado");
      break;
    } else if (destino === "" || typeof destino !== "string") {
      console.log("Destino inválido. Digite destino correto!");
      break;
    } else {
      console.log("Corrida confirmada!");
      break;
    }
  }

  console.log("Não entrei no while!");
}

// selecionar(partida, destino);

registrar(nome);
