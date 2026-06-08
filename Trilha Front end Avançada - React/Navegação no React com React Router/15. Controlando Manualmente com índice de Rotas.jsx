import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export function Navegation() {
  const rotas = ["/", "about", "/contact", "/products"];

  const [indiceAtual, setIndiceAtual] = useState(0);

  // Ativas a função de navegação
  const navigate = useNavigate();

  //   Função de voltar
  const handleVoltar = () => {
    if (indiceAtual > 0) {
      const novoIndice = indiceAtual - 1;
      setIndiceAtual(novoIndice);
      navigate(rotas[novoIndice]);
    }
  };

  // Função para avançar
  const handleAvancar = () => {
    if (indiceAtual < rotas.length - 1) {
      const novoIndice = indiceAtual + 1; // 2
      setIndiceAtual(novoIndice);
      navigate(rotas[novoIndice]); // 3 elemento com indice 2
    }
  };

  console.log(indiceAtual);
  return (
    <>
      <nav>
        <a href="https://www.google.com/" target="_blank">
          Google
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/products">Produtos</Link>
      </nav>
      <br />
      <br />

      <button onClick={() => navigate("/")}>Voltar para Página Home</button>
      <button onClick={handleVoltar} disabled={indiceAtual === 0}>Página Anterior</button>
      <button
        onClick={handleAvancar}
        disabled={indiceAtual >= rotas.length - 1}
      >
        Avançar
      </button>
    </>
  );
}

// useNavigate()
