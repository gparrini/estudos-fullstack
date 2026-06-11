import React from "react";
import { FaClipboardList } from "react-icons/fa";
import "./OrderCard.css";
import { OrderList } from "./OrderList";

export function OrderCard() {
  return (
    <div className="order-card">
      <h2 className="title">
        <FaClipboardList className="icon" />
        Pedidos do Dia
      </h2>

      {/* Renderizar 2 Componente */}
      <OrderList />
    </div>
  );
}
