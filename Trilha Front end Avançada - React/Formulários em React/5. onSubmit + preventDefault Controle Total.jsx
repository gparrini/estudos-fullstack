import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");

  //Função para lidar com o envio do formulário

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-container">
      <h1>Cadastro de Curso {nome}</h1>

      <form onSubmit={onSubmit}>
        {/* Campo de nome do curso */}
        <input
          type="text"
          placeholder="Nome do curso"
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />
        <span className="error">O nome do curso é obrigatório</span>

        {/* Campo de data de início */}
        <input type="date" lang="pt-BR" />

        {/* Seleção de categoria */}
        <select defaultValue="">
          <option value="" disabled>
            Escolha a categoria...
          </option>
          <option value="programacao">Programação</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
          <option value="outros">Outros</option>
        </select>

        {/* Campo de descrição */}
        <textarea placeholder="Descrição do curso" rows={4} />

        {/* Botão */}
       {/* <button type="submit" onClick={onSubmit}>Cadastrar</button> */}
      <button type="submit" >Cadastrar</button>
      </form>
    </div>
  );
}
