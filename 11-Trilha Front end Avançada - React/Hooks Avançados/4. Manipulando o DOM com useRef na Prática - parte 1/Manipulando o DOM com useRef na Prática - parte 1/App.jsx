import React, { useRef } from "react";
import "./App.css";

export function App() {
  const inputRef = useRef(null);

  const focarInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>Exemplo: Foco no Input</h2>

      <input type="text" placeholder="Digite Algo..." ref={inputRef} />

      <button onClick={focarInput}>Focar no Campo</button>
    </div>
  );
}
