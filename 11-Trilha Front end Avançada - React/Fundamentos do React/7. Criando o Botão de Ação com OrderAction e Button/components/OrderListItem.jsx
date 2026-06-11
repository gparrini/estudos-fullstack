import React from 'react'
import {FaUtensils} from "react-icons/fa"
import "./OrderListItem.css";
import { OrderAction } from './OrderAction';

export function OrderListItem({mesa, cliente, pedido}) {
const onEdit = () => {
    alert(`Editar pedido mesa ${mesa}`)
}

  return (
    <div className='order-item'>
        <p className='order-text'>
            <FaUtensils className='icon'/>
            <strong>Mesa {mesa} </strong> - {cliente}: {pedido}
        </p>
        {/* Renderize 4 componente */}
        <OrderAction onEdit={onEdit}/>
    </div>
  )
}

