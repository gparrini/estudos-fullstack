import React, { useState } from "react";
import { PainelContador } from "./components/PainelContador";
import { PainelMensagem } from "./components/PainelMensagem";

export function App() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const handleAumentar = () => setContador((prev) => prev + 1);
  // const handleDobrar = () => setContador(contador * 2);
  const handleDobrar = () => setContador((prev) => prev * 2);

  // Lógica da Mensagem
  const handleMensagem = (e) => setMensagem(e.target.value);

  const inverterMensagemLoop = () => {
    let textoInvertido = "";
    for (let i = mensagem.length - 1; i >= 0; i--) {
      textoInvertido += mensagem[i];
    }
    setMensagem(textoInvertido);
  };

  const inverterMensagemMetodo = () => setMensagem(mensagem.split('').reverse().join(""))

  return (
    <div>
      <h1>Desafio useState</h1>
      <PainelContador
        contador={contador}
        onDobrar={handleDobrar}
        onAumentar={handleAumentar}
      />
      <PainelMensagem
        onAlterarMensagem={handleMensagem}
        mensagem={mensagem}
        onInverterLoop={inverterMensagemLoop}
        onIverterTexto={inverterMensagemMetodo}
      />
    </div>
  );
}
