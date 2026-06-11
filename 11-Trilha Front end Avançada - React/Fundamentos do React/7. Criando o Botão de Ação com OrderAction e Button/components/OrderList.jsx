import React from "react";
import { OrderListItem } from "./OrderListItem";

const pedidos = [
  { mesa: 3, cliente: "João", pedido: "Pizza de Calabresa" },
  { mesa: 5, cliente: "Marina", pedido: "Lasanha e Suco de Laranja" },
  { mesa: 6, cliente: "Paulo", pedido: "Hamburguer e Coca-cola" },
  { mesa: 1, cliente: "Adriana", pedido: "Pizza de Mussarela" },
];

export function OrderList() {
  return (
    <div>
      <ul>
        {pedidos.map((pedido, index) => (
          // Renderizando 3 Componente
          <OrderListItem
            key={index}
            mesa={pedido.mesa}
            cliente={pedido.cliente}
            pedido={pedido.pedido}
          />
        ))}
      </ul>
    </div>
  );
}
