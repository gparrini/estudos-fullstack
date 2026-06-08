import React, { useState } from "react";
import "./App.css";

import { key } from "./data/key.js";
import axios from "axios";

export function App() {
  const [city, setCity] = useState(""); //Armazena o nome da cidade digitado pelo usuário
  const [loading, setLoading] = useState(false); // Indica se a requisição está em andamento
  const [weather, setWeather] = useState(true); // Guarda os dados retornados da API

  const API_KEY = key;

  //Função que faz a requisiçãona API
  const searchWeather = async () => {
    //verificações / validações
    if (!city.trim()) return;

    if (!API_KEY || API_KEY.length < 10) {
      //Se houver um erro nessa chave
      alert("Configure sua Chave");
      return;

    }
    try {
      
    } catch (error) {}
  };

  //Função para tratar o envio formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Chama a função que busca de dados
  };

  return (
    <div className="app">
      <div className="container">
        <h1>App do Tempo</h1>

        {/* Formulário de Pesquisa */}
        <form className="search-form" onSubmit={handleSubmit}>
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

        {/* Só mostramos os dados do clima se `weather` tiver algo */}
        {weather && (
          <div className="weather-card">
            {/* Nome da cidade e país →  */}
            <h2>Rio de Janeiro, Br</h2>

            {/* Temperatura atual em °C → */}
            <div className="temperature">24°C</div>

            {/* Descrição do clima (ex.: "céu limpo", "chuva leve") → */}
            <div className="description">céu limpo</div>

            {/* Detalhes adicionais do clima */}
            <div className="details">
              {/* Sensação térmica  → */}
              <div className="detail">
                <span>Sensação térmica:</span>
                <span>17°C</span>
              </div>

              {/* Umidade →  */}
              <div className="detail">
                <span>Umidade:</span>
                <span>59%</span>
              </div>

              {/* Velocidade do vento → */}
              <div className="detail">
                <span>Vento:</span>
                <span>7.2 m/s</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
