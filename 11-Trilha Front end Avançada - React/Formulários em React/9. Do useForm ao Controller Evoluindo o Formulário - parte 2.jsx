import "./App.css";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function App() {
  //useForm hook principal que inicia o formulário
  // Aqui definimos os valores padrão do formulário e pegamos os métodos necessários
  // control é usado para controlar os componentes/elementos do formulário
  // handleSubmit é uma função que lida com o envio do formulario
  const { control, handleSubmit,reset } = useForm({
    defaultValues: {
      nomeCurso: "",
      data: "",
      categoria: "",
      descricao: "",
    },
  });

  //Função para lidar com o envio do formulário
  //Aqui apenas logamos os dados no console
  // Em um caso real, você poderia enviar esses dados para um servidor
  const onSubmit = (data) => {
    console.log(data);
    reset(); // Reseta os campos do formulário após o envio
  };

  return (
    <div className="form-container">
      <h1>Cadastro de Curso {nome}</h1>
      {/* O handleSubmit é passado para o eveno onSubmit do formulário, possui o prórpio preventDefault embutido */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* O Controller é usado para conectar o campo de entrada do nome do curso ao React Hook Form */}
        <Controller
          control={control} // Controla o estado do formulário
          name="nomeCurso" // Nome do campo no formulário
          render={(field) => (
            //render prop que fornece os métodos do React Hook Form,
            //o field contém os métodos necessários como onChange, onBlur, value, ref
            <input type="text" placeholder="Nome do curso" {...field} />
            // Renderiza o campo de entrada e conecta todos os métodos do React Hook Form
          )}
        />

        <span className="error">O nome do curso é obrigatório</span>

        {/* Campo de data de início */}
        <Controller
          control={control}
          name="data"
          render={({ field }) => (
            <input
              type="date"
              placeholder="Data de início"
              {...field}
              lang="pt-BR"
            />
          )}
        />

        {/* Seleção de categoria */}
        <Controller
          control={control}
          name="categoria"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled selected>
                Escolha a categoria...
              </option>
              <option value="programacao">Programação</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="outros">Outros</option>
            </select>
          )}
        />

        {/* Campo de descrição */}
        <Controller
          control={control}
          name="descricao"
          render={({ field }) => (
            <textarea placeholder="Descrição do curso" rows={4} {...field}/>
          )}
        />

        {/* Botão */}
        {/* <button type="submit" onClick={onSubmit}>Cadastrar</button> */}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
