import React from "react";
import { Alert } from "./components/Alert";

export function App() {
  return (
    <div>
      <h1>Eventos na prática com Props</h1>
      <Alert tipo="semParametro">Alerta sem parâmetro</Alert>
      <br />
      <Alert tipo="comParametro" parametro="Olá eu sou um parâmetro">Alerta com parâmetro</Alert>
      <br />
      <Alert tipo="comEvent">Alerta com valor do input</Alert>
      <br />
       <Alert tipo="onMouseOver">Passou o mouse por cima</Alert>
       <br />
       <Alert tipo="onDoubleClick">Clique duas vezes!</Alert>
       <br />
       <Alert tipo="onKeyDown">Você pressionou a tecla no input</Alert>
    </div>
  );
}
