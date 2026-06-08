import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [contador, setContador] = useState(0);

  let mensagem;

  if (contador >= 5) {
    mensagem = <p>Cuidado! O contador está muito alto</p>
  }

  return (
    <>
      <h1>Renderização Condicional</h1>
      <div style={{ border: "1px solid black" }}>
        <h2>Operador Ternário</h2>
        {/* condiçao ? verdadeira : falsa */}

        <p>{isLogged ? "Bem-vindo" : "Por favor, faça o login"}</p>
        <button onClick={() => setIsLogged(!isLogged)}>
          {isLogged ? "Sair" : "Entrar"}
        </button>
      </div>

      <br />

      <div style={{ border: "1px solid red" }}>
        <h2>IF</h2>
        <p>Valor do Contador: {contador}</p>
        {mensagem}
      </div>

      <br />

      <div style={{ border: "1px solid blue" }}>
        <h2>Curto Circuito</h2>
      </div>
    </>
  );
}

export default App;
