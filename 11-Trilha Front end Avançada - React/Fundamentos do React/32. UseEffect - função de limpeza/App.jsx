import { useState } from "react";
import { Contador } from "./components/Contador";

function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <h1>UseEffect - Função Limpeza</h1>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Ocultar Contador" : "Mostra Contador"}
      </button>
      {isShow && <Contador />}
    </>
  );
}

export default App;
