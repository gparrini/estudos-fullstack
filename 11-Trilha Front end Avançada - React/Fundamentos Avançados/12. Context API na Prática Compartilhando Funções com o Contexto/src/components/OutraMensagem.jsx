import React, { useContext } from 'react'
import { AlertaContext } from '../context/AlertaContext'

export function OutraMensagem() {
    const {mostrarAlerta} = useContext(AlertaContext);
  return (
    <>
    <p onClick={()=> mostrarAlerta("Você clicou no parágrafo")}>Clique aqui também</p>
    </>
  )
}

