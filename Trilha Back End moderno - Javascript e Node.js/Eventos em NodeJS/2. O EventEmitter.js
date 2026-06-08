// const cadeira1 = {
//   nome: "cadeira gamer Hashtag",
//   modelo: "gamer",
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 150,
//   subirAltura: function () {
//     console.log("Cadeira aumentou seu tamanho");
//   },
// };

// const cadeira2 = {
//   nome: "cadeira simples Hashtag",
//   modelo: "office",
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 140,
//   subirAltura: function () {
//     console.log("Cadeira aumentou seu tamanho");
//   },
// };

// const cadeira3 = {
//   nome: "cadeira de escritório com encosto Hashtag",
//   modelo: "office",
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 140,
//   subirAltura: function () {
//     console.log("Cadeira aumentou seu tamanho");
//   },
// };

class CadeiraHashtag {
  constructor(
    nomeDaCadeira,
    modeloDaCadeira,
    ehAjustavel,
    ehErgonomica,
    alturaMinimaRecomendadaDaCadeira
  ) {
    this.nome = nomeDaCadeira;
    (this.modelo = modeloDaCadeira),
      (this.ajustavel = ehAjustavel),
      (this.ergonomica = ehErgonomica),
      (this.alturaMinimaRecomendada = alturaMinimaRecomendadaDaCadeira);
  }

  subirAltura() {
    console.log("Cadeira aumentou seu tamanho");
  }
}

const cadeira1 = new CadeiraHashtag(
  "cadeira gamer Hashtag",
  "gamer",
  true,
  true,
  150
);

const cadeira2 = new CadeiraHashtag(
  "cadeira escritório Hashtag",
  "simples",
  true,
  true,
  140
);

const cadeira3 = new CadeiraHashtag(
  "cadeira de escritório com encosto Hashtag",
  "office",
  true,
  true,
  140
);

const cadeira4 = new CadeiraHashtag(
  "cadeira simples Hashtag",
  "office",
  true,
  true,
  140
);

cadeira3.subirAltura();
