import React from 'react'
import ItemCarrinho from './ItemCarrinho'

function ListaCarrinho({itens, onRemover}) {
  return (
    <ul>
        {itens.map((item) => (
            <ItemCarrinho key={item.id} item={item} onRemover={onRemover}/>
        ))}
    </ul>
  )
}

export default ListaCarrinho