import React from "react";
import { useParams, Link, useNavigate } from "react-router";
import produtos from "../assets/data";

export function Details() {
  //   const params = useParams();
  //   console.log(params.id);
  const navigate = useNavigate();
  const { id } = useParams();

  if (id) {
    const produto = produtos.find((p) => p.id === id);

    if (!produto) {
      return (
        <div>
          <h1>Produto Não encontrado</h1>
          <Link to="/products">Voltar Produtos</Link>
        </div>
      );
    }

    return (
      <div>
        <h1>Detalhes de Produto</h1>
        <h2>{produto.nome}</h2>
        <p>Categoria: {produto.categoria}</p>
        <p>Preço: {produto.preco}</p>
        <p>Descrição: {produto.descricao}</p>
        <br />
        <button onClick={() => navigate(`/products/${produto.id}/info`)}>Informações</button>
        <Link to="/products">Voltar Produtos</Link>
      </div>
    );
  }
}

// useParams()
