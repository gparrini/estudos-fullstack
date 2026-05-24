function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n + factorial(n - 1);
  }
}

let valorFatorial = factorial(5);
// let valorFatorial = factorial(1543);
console.log(valorFatorial);

// Árvore de Chamadas

// factorial(5)
// |
// +--factorial(4)
//        |
//        +--factorial(3)
//               |
//               +--factorial(2)
//                      |
//                      +--factorial(1)
//                             |
//                             +--factorial(0)


// Árvore de Chamadas

// funcaoRecursiva(TEXTO)
// |
// +--funcaoRecursiva(EXTO)
//        |
//        +--funcaoRecursiva(XTO)
//               |
//               +--funcaoRecursiva(TO)
//                      |
//                      +--funcaoRecursiva(O)
//                              |
//                              +--funcaoRecursiva() - Parada

function recursividade(string) {
  if (string === "") {
    return 0;
  }
  return 1 + recursividade(string.substring(1)); // Chamada recursiva com a string menos o primeiro caracter
}

console.log(recursividade("Hashtag"));
console.log(recursividade("H"));

// Exemplo de objeto simples
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
  peças: {
    portas: 4,
    pneus: "Sistema Abs",
    airbag: true,
  },
};

// Função recursiva para imprimir propriedades de um objeto simples
function imprimirObjeto(objeto) {
  // Obter as chaves do objeto
  const keys = Object.keys(objeto); // lista [marca, modelo, ano] - [] = 0

  // Caso base - se o objeto estiver vazio
  if (keys.length === 0) {
    return; // interromper a função
  }

  // Iteração sobre as chaves do objeto
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = objeto[key];

    // Verificação se o valor é um objeto
    if (typeof value === "object") {
      // se for objeto, chama recursivamente a função
      imprimirObjeto(value);
    } else {
      // se não for objeto, imprimi chave e seu valor
      console.log(`${key}:${value}`);
    }
  }
}

// Chamada da função
imprimirObjeto(carro);


// exemplos de enumeração de informações em objetos e arrays: 
// 
// valores de truthy e falsy: