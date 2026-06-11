import React from "react";
import { A } from "./components/A";
import { D } from "./components/D";
import { B } from "./components/B";
import { C } from "./components/C";

function App() {
  let nome = "Millene";
  let idade = 28;
  let cidade = "São Paulo";

  const getCidade = () => null;

  return (
    <div>
      <h2>APP</h2>
      {/* <A nome={nome} idade={idade} cidade={cidade} /> */}
      {/* <A nome={nome} idade={idade} cidade={getCidade()} /> */}
      {/* <D cidade={cidade}/> */}
      <A>
        <D nome={nome} idade={idade} cidade={cidade} />
      </A>
    </div>
  );
}

export default App;
