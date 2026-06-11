import React from 'react'
import { Botao } from './components/Botao';
import { Mensagem } from './components/Mensagem';

export function App() {
  return (
    <>
    <Botao text="Clique Aqui"/>
    <Botao>
      Clique Aqui!
    </Botao>
    <hr />
    <Mensagem>
      <h1>Titulo</h1>
      <p>Eu sou um children</p>
      <p>Olá Impressionador</p>
      <input type="text" />
    </Mensagem>

    <Mensagem>
      <Botao/>
      <button>Botão</button>
      <p>Sou o segundo componente mensagem</p>
      <a href="http://" target="_blank" rel="noopener noreferrer">Ancora</a>
    </Mensagem>
    </>
  )
}


