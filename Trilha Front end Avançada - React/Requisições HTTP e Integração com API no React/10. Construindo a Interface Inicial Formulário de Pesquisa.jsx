import React, { useState } from "react";

export function App() {
  const [city, setCity] = useState(""); //Armazena o nome da cidade digitado pelo usuário
  const [loading, setLoading] = useState(false); // Indica se a requisi~]ao está em andamento

  return (
    <div className="app">
      <div className="container">
        <h1>App do Tempo</h1>

      {/* Formulário de Pesquisa */}
        <form className="search-form">
          <input
            type="text"
            className="city-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Digite o nome da cidade"
          />

          <button type="submit" disabled={loading} className="search-btn">
            {loading ? "Buscando" : "Procurar"}
          </button>
        </form>
      </div>
    </div>
  );
}
