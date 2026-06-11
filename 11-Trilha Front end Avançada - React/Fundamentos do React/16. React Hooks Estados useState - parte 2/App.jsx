import React from "react";
import { useMensagem } from "./hooks/useMensagem";
import { Contador } from "./components/Contador";
import { useTextoDigitado } from "./hooks/useTextoDigitado";

export function App() {
  // const  [valorAtual, setAtualizarValor ] = useState(valorInicial);
  const {user, showMessage, handleMensagem} = useMensagem();
  const [mensagem, handleInputMensagem] = useTextoDigitado();

  return (
    <div>
      <Contador />
      <h2>Caixa de Mensagem de Bem vindo</h2>
      <input type="text" placeholder="Digite seu nome..." onKeyDown={handleMensagem} />
      {showMessage && <p>Olá, {user}! Seja bem vindo ao nosso app!</p>}

      <br />
      <input type="text" placeholder="Digite sua mensagem" onChange={handleInputMensagem} />
      <p>{mensagem}</p>
    </div>
  );
}
