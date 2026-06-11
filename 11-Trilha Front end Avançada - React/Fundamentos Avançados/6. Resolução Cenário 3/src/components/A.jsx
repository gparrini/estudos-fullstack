import React from "react";
import { B } from "./B";

export function A({ children }) {
  return (
    <div>
      <h2>Componente A</h2>
      {/* <B nome={nome} idade={idade} cidade={cidade}/> */}
      {children}
    </div>
  );
}
