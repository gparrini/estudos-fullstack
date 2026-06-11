import React from 'react'
import {CampoInput} from "./CampoInput";
import { Button } from './Button';

export function PainelMensagem({mensagem, onAlterarMensagem, onIverterTexto, onInverterLoop}) {
  return (
    <div>
        <h2>Caixa de Mensagem</h2>
        <CampoInput placeholder="Digite uma mensagem" onChange={onAlterarMensagem}/>
        <Button onClick={onIverterTexto}>InervterMensagem</Button>
        <Button onClick={onInverterLoop}>InverterLoop</Button>
        <p>Sua Mensagem: {mensagem}</p>
    </div>
  )
}

