function App() {
  let numero = 10;
  let nome = "Millene";

  return (
    <div>
      <h1>Hello Word!</h1>
      <p>Sou uma parágrafo</p>
      <p>
        Sou a variável {numero} e meu nome é {nome}
      </p>
    </div>
  );
}

export default App;

// createElement ("h1", null, "Olá")
// tipo -> propriedades -> filhos
