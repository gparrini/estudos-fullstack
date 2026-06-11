import React, { useCallback, useMemo, useState } from "react";
import ListaProdutos from "./components/ListaProdutos";
import Contador from "./components/Contador";

export function App() {
  // Dados estáticos da lista de produtos
  const produtos = useMemo(
    () => [
      { id: 1, nome: "Notebook", categoria: "eletronicos" },
      { id: 2, nome: "Camiseta", categoria: "roupas" },
      { id: 3, nome: "Geladeira", categoria: "eletrodomesticos" },
      { id: 4, nome: "Calça", categoria: "roupas" },
      { id: 5, nome: "Celular", categoria: "eletronicos" },
    ],
    []
  );

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>

      <label>
        {" "}
        Filtrar por categoria{" "}
        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
        >
          <option value="">Todas</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="roupas">Roupas</option>
          <option value="eletrodomesticos">Eletrodomésticos</option>
        </select>
      </label>

      <ListaProdutos produtos={produtos} categoria={categoriaSelecionada} />

      <Contador valor={contador} incrementar={incrementar} />
    </div>
  );
}
