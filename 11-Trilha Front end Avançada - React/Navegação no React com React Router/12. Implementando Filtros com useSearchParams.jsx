import React from "react";
import { Link, useSearchParams } from "react-router";
import produtos from "../assets/data";

export function Products() {
  // const params = useSearchParams();
  // console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();

  const categoria = searchParams.get("categoria"); //eletrônico - vestuário

  const produtosFiltrados = produtos.filter((produto) => {
    const categoriaFiltrada = categoria
      ? produto.categoria === categoria
      : "todos";
    return categoriaFiltrada;
  });

  const filtrarPorCategoria = (categoria) => {
    const params = {};
    if (categoria) params.categoria = categoria;
    setSearchParams(params);
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>

      <span>Filtro por Categoria</span>
      <button onClick={() => filtrarPorCategoria("eletrônico")}>Eletrônico</button>
      <button onClick={() => filtrarPorCategoria("vestuário")}>Vestuário</button>
      <button onClick={() => filtrarPorCategoria()}>Todos</button>
      {/* Renderizar uma lista */}
      <ul>
        {produtosFiltrados.map((produto) => (
          <li key={produto.id}>
            <Link to={`/products/${produto.id}`}>{produto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* 
Hook useSearchParams - Como funciona
Ele retorna um array com dois elementos:
- searchParams – um objeto que representa os parâmetros atuais da URL.
- setSearchParams – uma função que permite atualizar esses parâmetros.

Descontrução: const [searchParams, setSearchParams] = useSearchParams();
*/
