import { Article } from "./components/Article";
import { Botao } from "./components/Botao";
import { Mensagem } from "./components/Mensagem";

export function App() {
  const titulo = "Meu artigo";
  return (
    <>
      <Botao text="Clique Aqui" />
      <Botao text="Sou um botão" />
      <hr />
      <Mensagem
        titulo="Titulo da minha mensagem"
        conteudo="Eu sou uma mensagem dentro do paragrafro"
      />

      <Mensagem titulo="Segundo título" conteudo="Mais um conteúdo" />

      <hr />
      <Article
        text={titulo}
        author="João Paulo"
        content="lorem lorem lorem"
        textButton="Like"
        comments="Adorei seu artigo!"
      />

      <Article
        text="Meu segundo artigo"
        author="Lira"
        content="lorem lorem lorem lorem lorem lorem"
        textButton="Like"
        comments="Adorei seu artigo!Achei sensacional"
      />
    </>
  );
}
