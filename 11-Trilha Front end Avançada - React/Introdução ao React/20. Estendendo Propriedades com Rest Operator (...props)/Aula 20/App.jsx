import React from "react";
import { Botao } from "./components/Botao";
import { Input } from "./components/Input";

export function App() {
  function criarUsuario() {
    alert("Uusário Criado");
  }
  return (
    <>
      <Botao onClick={criarUsuario} text="Criar" />
      <Botao onClick={() => alert("Usuário Cancelado!")} text="Cancelar" />
      <Botao text="Atualizar" disabled={true} type="button" />
      <hr />
      <Input
        type="text"
        placeholder="Digite Aqui"
        required={true}
        id="1"
        name="inputText"
      />

      <Input
        type="email"
        placeholder="Digite seu email"
        required={false}
        id="2"
        name="inputEmail"
        disabled={true}
      />
    </>
  );
}
