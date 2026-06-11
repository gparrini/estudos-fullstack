export class DomHandler {
  static atualizarListaPaciente(pacientes) {
    const selectPaciente = document.getElementById("selectPaciente");
    selectPaciente.innerHTML = `<option value="">--Selecione um paciente--</option>`;

    pacientes.forEach((paciente) => {
      const option = document.createElement("option");
      option.value = paciente.nome;
      option.textContent = paciente.nome;
      selectPaciente.appendChild(option);
    });
  }

  static atualizarListaMedico() {}
}

// const handler = new DomHandler;
// DomHandler.atualizarListaMedico
