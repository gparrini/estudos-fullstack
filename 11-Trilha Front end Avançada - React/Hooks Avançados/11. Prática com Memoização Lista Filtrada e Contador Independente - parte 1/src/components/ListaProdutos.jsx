import React, { useMemo } from "react";
import Produto from "./Produto";

function ListaProdutos({ produtos, categoria }) {
  const produtosFiltrados = useMemo(() => {
    console.log("Filtrando produtos...");

    if (!categoria) return produtos;

    //Filtro
    return produtos.filter((produto) => produto.categoria === categoria);
  }, [categoria, produtos]);

  return (
    <ul>
      {produtosFiltrados.map((produto) => (
        <Produto key={produto.id} nome={produto.nome} />
      ))}
    </ul>
  );
}

export default ListaProdutos;
