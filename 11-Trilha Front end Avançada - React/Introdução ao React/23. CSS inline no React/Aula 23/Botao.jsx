import React from "react";

export function Botao({ text }) {
  return (
    <>
      <button
        style={{
          color: "white",
          cursor: "pointer",
          padding: "10px",
          backgroundColor: "red",
          fontSize: "16px",
        }}
      >
        {text}
      </button>
    </>
  );
}
