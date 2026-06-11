import React from "react";
import { Link, useNavigate } from "react-router";

export function Navegation() {
    // Ativas a função de navegção
    const navigate = useNavigate();

    // Função para avançar
    const handleAvancar = () =>
    {
        navigate(1);
    }

  return (
    <>
      <nav>
        <a href="https://www.google.com/" target="_blank">Google</a>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/products">Produtos</Link>
      </nav>
      <br />
      <br />

      <button onClick={()=> navigate("/")}>Voltar para Página Home</button>
      <button onClick={()=> navigate(-1)}>Página Anterior</button>
      <button onClick={handleAvancar}>Avançar</button>
    </>
  );
}

// useNavigate()