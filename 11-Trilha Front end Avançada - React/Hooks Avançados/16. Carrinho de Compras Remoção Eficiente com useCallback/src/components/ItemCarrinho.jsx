import React from "react";

function ItemCarrinho({ item, onRemover }) {
  console.log("Renderizando: ", item.nome); //log verificar se o componente vai ser renderiza

  return (
    <li style={{ marginBottom: "10px" }}>
      {item.nome}
      <button
        style={{
          padding: "5px 10px",
          marginLeft: "10px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => onRemover(item.id)}
      >
        Remover
      </button>
    </li>
  );
}

export default React.memo(ItemCarrinho);
