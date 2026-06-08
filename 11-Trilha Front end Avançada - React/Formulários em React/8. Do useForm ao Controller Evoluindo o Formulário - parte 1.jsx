import "./App.css";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
        nomeCurso: "",
    },
  });

  //Função para lidar com o envio do formulário
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>Cadastro de Curso {nome}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo de nome do curso */}
        <Controller
          control={control}
          name="nomeCurso"
          render={(field) => <input type="text" placeholder="Nome do curso" {...field} />}
        />

        <span className="error">O nome do curso é obrigatório</span>

        {/* Campo de data de início */}
        <input type="date" lang="pt-BR" />

        {/* Seleção de categoria */}
        <select>
          <option value="" disabled selected>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
