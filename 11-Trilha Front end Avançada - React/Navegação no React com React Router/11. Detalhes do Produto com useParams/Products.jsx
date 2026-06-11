import React from "react";
import { Link } from "react-router";
import produtos from "../assets/data";

export function Products() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      {/* Renderizar uma lista */}
      <ul>
        {produtos.map((produto) => (
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

