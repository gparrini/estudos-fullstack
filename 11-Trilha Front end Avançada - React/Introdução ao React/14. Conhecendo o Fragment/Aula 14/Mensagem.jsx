import { Fragment } from "react";
import { Botao } from "./Botao";

export function Mensagem() {
  return (
    <Fragment>
      <h1>Estou no componente Mensagem</h1>
      <p>Clique no botão abaixo</p>
      <Botao />
    </Fragment>
  );
}
