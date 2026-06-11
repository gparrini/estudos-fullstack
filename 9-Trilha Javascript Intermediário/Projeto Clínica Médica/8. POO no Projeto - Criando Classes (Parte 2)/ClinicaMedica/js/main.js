import { Paciente } from "./Paciente.js";
import { Medico } from "./Medico.js";

async function carregarDados() {
  const responseMedico = await fetch("./data/medicos.json");
  const medicosData = await responseMedico.json();
  //   console.log(medicosData);
  // console.log(responseMedico)

  const responsePaciente = await fetch("./data/pacientes.json");
  const pacienteData = await responsePaciente.json();
  //   console.log(pacienteData);
  // console.log(responsePaciente);
}

carregarDados();

const medico = new Medico(
  "Dr.Fernando Dias",
  40,
  "123.455.786-90",
  "Pediatria"
);
const paciente = new Paciente("Fabio Duarte", 10, "123.456.789.65");

medico.agendarConsulta(paciente, "10/05/2025").then((mensagem) => {
  console.log(mensagem);
});