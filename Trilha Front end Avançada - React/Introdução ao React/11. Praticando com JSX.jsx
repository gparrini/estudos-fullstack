import React from "react";
import logoReact from "./assets/react.svg";

function App() {
  const mensagem = "Olá Mundo!";
  const number = 15;

  return (
    // div , main
    <main>
      <div>App</div>
      <h1>Sou um título</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <button onClick={() => alert("Cliquei no botão")}>Clique Aqui!</button>
      <hr />
      <span>{mensagem}</span>
      {number}
      <img src={logoReact} alt="logoReact" />
      <img src="vite.svg" alt="logoVite" />
    </main>
  );
}

export default App;

// JSX
// Retornar um elemento PAI
// JS => {}
// Propriedades / Métodos => convenção de CamelCase
// public -> Passa o nome do arquivo
//Pasta/imagens dentro do SRC -> precisam ser importadas para utilizar.
