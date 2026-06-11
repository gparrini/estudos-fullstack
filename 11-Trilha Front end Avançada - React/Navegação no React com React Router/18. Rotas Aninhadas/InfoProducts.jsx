import React from 'react'
import { useParams } from 'react-router'
import produtos from "../assets/data";

export function InfoProducts() {
    const {id} = useParams();

    const produto = produtos.find((item) => item.id === id)

    if(!produto) {
        return <p>Produto não Encontrado!</p>
    }

  return (
    <div>
        <h1>{produto.nome}</h1>
        <p>{produto.informacoes}</p>
    </div>
  )
}

