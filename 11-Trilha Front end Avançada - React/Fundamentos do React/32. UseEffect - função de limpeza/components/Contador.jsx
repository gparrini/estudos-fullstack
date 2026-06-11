import React, { useEffect, useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Intervalo rodando...");
    }, 1000);

    return () => {
      console.log("Limpando intervalo");
      clearInterval(timer);
    };
  }, []);

//    [] [dependencia] 

  return (
    <div>
      <h2>Número: {contador} </h2>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}
