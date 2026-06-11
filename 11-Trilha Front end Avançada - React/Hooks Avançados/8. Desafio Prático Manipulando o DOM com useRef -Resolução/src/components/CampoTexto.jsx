import React, { useRef, useState } from "react";
import style from "./CampoTexto.module.css";

export function CampoTexto() {
  const inputRef = useRef(null);
  const [inputState, setInputState] = useState("");

  const handClick = () => {
    //Verificar se a referência do elemento está conectada
    if (inputRef.current) {
      //Foca o campo de texto
      inputRef.current.focus();

      //Captura a largura do input e imprimir no console
      const largura = inputRef.current.offsetWidth;
      //largura: conteúdo padding bordas, não inclui margens externas
      console.log(`Largura do campo de texto é: ${largura}px`);

      setInputState(`Largura do campo de texto é: ${largura}px`)
    }
  };
  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Digite Algo..."
        className={style.input}
        ref={inputRef}
      />

      <button className={style.botao} onClick={handClick}>
        Focar e Medir
      </button>

      <p>{inputState}</p>
    </div>
  );
}
