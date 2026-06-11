import React from "react";
import { Botao } from "./components/Botao";

export function App() {
  function criarUsuario() {
    alert("Uusário Criado")
  }
  return (
    <>
      <Botao onClick={criarUsuario} text="Criar" />
      <Botao onClick={() => alert("Usuário Cancelado!")} text="Cancelar" />
    </>
  );
}
