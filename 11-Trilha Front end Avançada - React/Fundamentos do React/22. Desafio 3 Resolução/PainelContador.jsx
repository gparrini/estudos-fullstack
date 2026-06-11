import React from 'react'
import { Button } from './Button'

export function PainelContador({contador,onAumentar,onDobrar, onDiminuir, onDiminuirSeguro}) {
  return (
    <div>
        <h2>Contador de Cliques</h2>
        <p>Valor atual: {contador}</p>
        <Button onClick={onAumentar}>Aumentar</Button>
        <Button onClick={onDobrar}>Dobrar</Button>
        <Button onClick={onDiminuir} disabled={contador === 0}>Diminuir</Button>
        <Button onClick={onDiminuirSeguro} disabled={contador === 0}>Diminuir Seguro</Button>
    </div>
  )
}
