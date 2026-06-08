import React, { useState } from "react";
import "./App.css";

export function App() {
  const [dados, setDados] = useState(null);

  const buscarDados = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts/10")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setDados(json);
          return json;
        }).catch(erro => {
          console.error("Erro ao buscar os dados", erro);
          return null;
        })
   
  };

  return (
    <div className="app">
      <h1>Exemplo de Requisição via Fetch</h1>

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
