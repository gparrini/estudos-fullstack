import React from "react";
import { A } from "./components/A";
import { D } from "./components/D";

function App() {
  let nome = "Millene";
  let idade = 28;
  let cidade = "São Paulo";

  const getCidade = () => null;

  return (
    <div>
      <h2>APP</h2>
      {/* <A nome={nome} idade={idade} cidade={cidade} /> */}
      <A nome={nome} idade={idade} cidade={getCidade()}/>
      {/* <D cidade={cidade}/> */}

    </div>
  );
}

export default App;
