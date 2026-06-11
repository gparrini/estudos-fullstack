import React from "react";
import { Botao } from "./components/Botao";
import { Mensagem } from "./components/Mensagem";
import "./global.css";

export function App() {
  const ativo = true;
  return (
    <div className="container">
      <h1>Bem vindo ás aulas de CSS no React</h1>

      <button id="botao-principal">Clique Aqui</button>
      <hr />
      <Botao text="Clique" />
      <hr />
      <Mensagem>
        <p style={{ color: ativo ? "green" : "gray" }}>
          {/* Operador ternario - if/else */}
          Status: {ativo ? "Ativo" : "Inativo"}
        </p>
      </Mensagem>
    </div>
  );
}
