import React, { useState } from 'react'
import { PainelContador } from './components/PainelContador'

export function App() {
  const [contador, setContador] = useState(0);

  const handleAumentar = () => setContador((prev) => prev + 1);

  // const handleDobrar = () => setContador(contador * 2);
  const handleDobrar = () => setContador((prev) => prev * 2);

  return (
    <div>
      <h1>Desafio useState</h1>
      <PainelContador contador={contador} onDobrar={handleDobrar} onAumentar={handleAumentar}/>
    </div>
  )
}

