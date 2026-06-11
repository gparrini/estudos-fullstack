import React, { useState } from "react";
import { PainelContador } from "./components/PainelContador";
import { PainelMensagem } from "./components/PainelMensagem";

export function App() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [incremento, setIncremento] = useState(1);

  const handleAumentar = () => setContador((prev) => prev + incremento);
  // const handleDobrar = () => setContador(contador * 2);
  const handleDobrar = () => setContador((prev) => prev * 2);
  const diminuir = () => setContador(contador - 1);
  const diminuirSeguro = () => contador > 0 && setContador(contador - 1);
  const zerar = () => setContador(0);

  const handleIncremento = (e) => {
    const valor = parseInt(e.target.value); // "2" => 2
    if (isNaN(valor) || e.target.value.trim() === "") {
      setIncremento(1)
    } else {
      setIncremento(valor);
    }
  };

  // Lógica da Mensagem
  const handleMensagem = (e) => setMensagem(e.target.value);

  const inverterMensagemLoop = () => {
    let textoInvertido = "";
    for (let i = mensagem.length - 1; i >= 0; i--) {
      textoInvertido += mensagem[i];
    }
    setMensagem(textoInvertido);
  };

  const inverterMensagemMetodo = () =>
    setMensagem(mensagem.split("").reverse().join(""));

  return (
    <div>
      <h1>Desafio useState</h1>
      <PainelContador
        contador={contador}
        onDobrar={handleDobrar}
        onAumentar={handleAumentar}
        onDiminuir={diminuir}
        onDiminuirSeguro={diminuirSeguro}
        onZerar={zerar}
        onAlterarIncremento={handleIncremento}
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
