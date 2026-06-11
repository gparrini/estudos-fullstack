import { Botao } from "./components/Botao";
import { Mensagem } from "./components/Mensagem";

export function App() {
  return (
    <>
      <Botao text="Clique Aqui" />
      <Botao text="Sou um botão" />
      <hr />
      <Mensagem
        titulo="Titulo da minha mensagem"
        conteudo="Eu sou uma mensagem dentro do paragrafro"
      />

      <Mensagem
        titulo="Segundo título"
        conteudo="Mais um conteúdo"
      />
    </>
  );
}
