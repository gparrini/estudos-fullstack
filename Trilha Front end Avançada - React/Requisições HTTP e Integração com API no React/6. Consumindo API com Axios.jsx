import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export function App() {
  const [dados, setDados] = useState(null);

  //Requisição Fetch - THEN/CATCH

  // const buscarDados = async () => {
  //   return fetch("https://jsonplaceholder.typicode.com/posts/10")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setDados(json);
  //       return json;
  //     })
  //     .catch((erro) => {
  //       console.error("Erro ao buscar os dados", erro);
  //       setDados(null); // opcional
  //       return null; // opcional
  //     });
  // };

  //Requisição Fetch - TRY/CATCH
  // const buscarDados = async () => {
  //   try {
  //     const resposta = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts/10"
  //     );
  //     const json = await resposta.json();
  //     setDados(json);
  //   } catch (error) {
  //     console.error("Erro ao buscar dados", error);
  //     setDados(null); // opcional
  //     return null; // opcional
  //   }
  // };

  //Requisição via Axios
  const buscarDados = async () => {
    try {
      const resposta = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/10"
      );
      console.log(resposta);
      setDados(resposta.data);
    } catch (error) {
      console.error("Erro ao buscar dados", error);
    }
  };

  return (
    <div className="app">
      <h1>Exemplo de Requisição via Axios</h1>

      <button className="btn" onClick={buscarDados}>
        Buscar Dados
      </button>

      {dados && (
        <div className="card">
          <h2>{dados.title}</h2>
          <p>{dados.body}</p>
        </div>
      )}
    </div>
  );
}
