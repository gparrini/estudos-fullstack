import React from "react";
import { C } from "./C";

export function B({children}) {
  return (
    <div>
      <h2>Componente B</h2>
      {children}
    </div>
  );
}
