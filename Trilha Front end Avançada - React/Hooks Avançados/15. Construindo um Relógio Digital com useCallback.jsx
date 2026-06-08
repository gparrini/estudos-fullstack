import React, { useCallback, useEffect, useState } from "react";

export function App() {
  // 1 criar um estado armazenar hora atual
  const [horaAtual, setHoraAtual] = useState(() => {
    const agora = new Date().toLocaleTimeString(); // horario atual e formato: 23:05:15
    return agora;
  });

  // 2. Definir uma função de atualização - memoização
  const atualizarHora = useCallback(()=>{
    console.log("Cada segundo chamando função");
    const novaHora = new Date().toLocaleTimeString();
    setHoraAtual(novaHora);
  },[]); // sem dependência = criado apenas uma vez- função

  // 3. Efeito configura - adicionar o intervalo de 1000ms
  useEffect(() => {
    console.log("função está sendo criada");
    const intervalo = setInterval(atualizarHora, 1000);

    //função de limpeza
    return () => clearInterval(intervalo);
  }, [atualizarHora]);
  return (
    <div style={{ textAlign: "center", fontSize: "3rem", marginTop: "2rem" }}>
      {horaAtual}
    </div>
  );
}
