import React from 'react'
import {FaUtensils} from "react-icons/fa"
import "./OrderListItem.css";

export function OrderListItem({mesa, cliente, pedido}) {
  return (
    <div className='order-item'>
        <p className='order-text'>
            <FaUtensils className='icon'/>
            <strong>Mesa {mesa} </strong> - {cliente}: {pedido}
        </p>
        {/* Renderize 4 componente */}
    </div>
  )
}

