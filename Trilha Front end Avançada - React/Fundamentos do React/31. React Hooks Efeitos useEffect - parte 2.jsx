import { useEffect, useState } from "react";

function App() {
  const [mensagem, setMensagem] = useState("");
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    setMensagem(`O número atual é: ${numero}`)
  }, [numero]); // useEffect depender do numero

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Rodando a cada segundo" + timer)
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, [])

  return (
    <>
      <h1>UseEffect</h1>
      <p>{mensagem}</p>
      <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
    </>
  );
}

export default App;

// Só na montagem  - []
// Toda vez que algo muda - [dependencia]
