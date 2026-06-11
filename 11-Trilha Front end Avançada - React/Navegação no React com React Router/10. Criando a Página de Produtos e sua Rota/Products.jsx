import React from 'react'
import { Link } from 'react-router'

const produtos = [
    {id: "1", nome: "Notebook Gamer"},
    {id: "2", nome: "Mouse Óptico"},
    {id: "3", nome: "Teclado Mecânico"}
]

export function Products() {
  return (
    <div>
        <h1>Lista de Produtos</h1>
        {/* Renderizar uma lista */}
        <ul>
            {produtos.map((produto) => (
                <li key={produto.id}>
                <Link to="/products">{produto.nome}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

