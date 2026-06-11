import React from "react";
import styles from "./botao.module.css";

export function Botao({ text }) {
  return (
    <>
    <div className="container">
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
      </div>
    </>
  );
}
