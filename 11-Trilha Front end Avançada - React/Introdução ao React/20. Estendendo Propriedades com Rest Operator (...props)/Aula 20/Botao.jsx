import React from "react";

export function Botao({text, ...props}) {
// console.log(props)
  return (
    <>
      <button {...props}>
        {text}
        </button>
    </>
  );
}
