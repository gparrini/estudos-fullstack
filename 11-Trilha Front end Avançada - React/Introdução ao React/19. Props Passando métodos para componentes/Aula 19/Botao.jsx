import React from "react";

export function Botao({text, onClick}) {
// console.log(props)
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}
