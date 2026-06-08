import React, { useState } from 'react'

export function Contador() {
    const [contador, setContador] = useState(0); // contador = 0

    // Função aumentar
    const handleAumentar = () => {
        setContador((prevValue) => prevValue + 1)
    }

    // Função diminuir
    const handleDiminuir= () => {
        setContador((prev) => prev - 1);
    }

    //função de zerar
    const handleZerar = () => {
        setContador(0)
    }

  return (
    <div>
        <h2>Contador de cliques</h2>
        <p>Valor atual: {contador}</p>

        <button onClick={handleAumentar}>Aumentar</button>
        <button onClick={handleDiminuir}>Diminuir</button>
        <button onClick={handleZerar}>Zerar</button>
    </div>
  )
}

