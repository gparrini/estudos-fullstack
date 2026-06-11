import React from "react";
import { useMensagem } from "./hooks/useMensagem";
import { Contador } from "./components/Contador";

export function App() {
  // const  [valorAtual, setAtualizarValor ] = useState(valorInicial);
  const mensagem = useMensagem("Marcos");

  return (
    <div>
      <Contador />
      <h2>{mensagem}</h2>
    </div>
  );
}
