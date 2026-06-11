import React, { useEffect, useState } from "react";

export function FetchDataExample() {
  //Estado para controlar o carregamento
  const [isLoading, setIsLoading] = useState(true);

  // Estado para armazenar os dados simulado {}
  const [data, setData] = useState(null);

  //useEffect para simular a busca de dados na montagem desse compomente - []
  useEffect(() => {
    console.log("Iniciando busca de dados");

    //Simular requisição com setTimeout
    const timer = setTimeout(() => {
      setData({
        id: 1,
        nome: "Marcos Monte",
        profissao: "Desenvolvedor Frontend",
      });

      setIsLoading(false);
    }, 3000);

    //Função de limpeza
    return () => {
      clearTimeout(timer);
      console.log("componente desmontado. Timer limpo!");
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Carregamento de Dados...</p>
      ) : (
        <div>
          <p>
            <strong>Id:</strong> {data.id}
          </p>
          <p>
            <strong>Nome:</strong> {data.nome}
          </p>
          <p>
            <strong>Profissão:</strong> {data.profissao}
          </p>
        </div>
      )}
    </>
  );
}
