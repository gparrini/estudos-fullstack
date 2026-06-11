import React from "react";
import { Mensagem } from "./components/Mensagem";
import { Botao } from "./components/Botao";

export function App() {
  return (
    <React.Fragment>
      <Mensagem />
      <hr />
      <Botao />
    </React.Fragment>
  );
}

// Fragment -> componente nativo do React
// rfce
