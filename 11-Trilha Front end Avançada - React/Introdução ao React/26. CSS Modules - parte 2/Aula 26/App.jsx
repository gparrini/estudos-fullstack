import React from "react";
import { Botao } from "./components/botao/Botao";
import { Mensagem } from "./components/Mensagem";
import "./global.css";
import "./style.css";
import { Input } from "./components/input/Input";

export function App() {
  const ativo = false;
  return (
    <div className="container">
      <h1>Bem vindo ás aulas de CSS no React</h1>

      <button id="botao-principal">Clique Aqui</button>
      <hr />
      <Botao text="Clique" />
      <hr />
      <Input type="text" />
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
