import React from "react";

export function Dados() {
  const tecnologia = "React";
  const status = false;

  function soma(a, b) {
    return a + b;
  }

  function concatena(valor1, valor2) {
    return valor1 + valor2;
  }

  return (
    <>
      <h1>{tecnologia} é incrível!</h1>
      <h2>2 + 3 = {soma(2, 3)}</h2>
      <p>{concatena("Olá ", "Millene")}</p>
      <h3>Status: {status ? "Ligado" : "Desligao"}</h3>
    </>
  );
}
