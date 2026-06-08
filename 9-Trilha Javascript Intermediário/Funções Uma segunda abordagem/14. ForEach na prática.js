// Sintaxe array.forEach((elemento) => {instrução})
// Sintaxe array.forEach((elemento, index, array) => {instrução})

const alunos = [
  { nome: "Alice", nota: 8 },
  { nome: "Bob", nota: 9.5 },
  { nome: "Charlie", nota: 8.8 },
  { nome: "David", nota: 7.5 },
  { nome: "Evelyn", nota: 9 },
];

//Primeiro Loop encontrar a maior nota
let maiorNota = 0;

alunos.forEach((aluno) => {
  if (aluno.nota > maiorNota) {
    maiorNota = aluno.nota;
  }
});

let notasNormalizadas = [];
// nota => nota original / nota maior * 10
// Acessar o array completo
alunos.forEach((aluno, indice, array) => {
  let notaNormalizada = (aluno.nota / maiorNota) * 10;
  notasNormalizadas.push({
    nome: aluno.nome,
    notaOriginal: aluno.nota,
    notaNormalizada: notaNormalizada.toFixed(2),
  });

  //Mensagem para cada aluno
  console.log(
    `Aluno ${indice + 1}/${array.length}: ${aluno.nome} - Nota Original: ${
      aluno.nota
    }, Nota Normalizada: ${notaNormalizada.toFixed(2)}`
  );
});

console.log("Notas Normalizadas: ", notasNormalizadas);
