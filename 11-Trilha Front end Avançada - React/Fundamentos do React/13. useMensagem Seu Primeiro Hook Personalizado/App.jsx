import React from 'react'
import { useMensagem } from './hooks/useMensagem'

export function App() {
  const mensagem = useMensagem("Marcos");

  return (
    <div>
      <h1>{mensagem}</h1>
    </div>
  )
}

