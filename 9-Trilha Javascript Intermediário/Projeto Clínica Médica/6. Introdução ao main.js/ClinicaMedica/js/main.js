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
