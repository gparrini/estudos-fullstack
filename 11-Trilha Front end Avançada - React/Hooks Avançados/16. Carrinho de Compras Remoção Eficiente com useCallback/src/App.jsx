import React, { useCallback, useState } from "react";
import ListaCarrinho from "./components/ListaCarrinho";

export function App() {
  const [carrinho, setCarrinho] = useState([
    { id: 1, nome: "Notebook" },
    { id: 2, nome: "Camiseta" },
    { id: 3, nome: "Geladeira" },
  ]);

  //Função para remover - memoizar com useCallBack
  const removerItem = useCallback((id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((item) => item.id !== id)
    ); // remove o item com  id correspondente
  }, []); // sem dependência - uma unica vez é criado 

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Carrinho de Compras</h1>

      <ListaCarrinho itens={carrinho} onRemover={removerItem} />
    </div>
  );
}
