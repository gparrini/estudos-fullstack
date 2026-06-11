// Script para o Carrossel da Home
var elemsCarrosselBotao = document.querySelectorAll(".carrossel__botao");
var elemCarrosselImagens = document.querySelector(".carrossel__imagens");

function rodarCarrossel(i) {
  var itemAnt = i - 1;

  if (i == 0) {
    itemAnt = elemsCarrosselBotao.length - 1;
  }

  elemsCarrosselBotao[itemAnt]
    .querySelector("div")
    .classList.remove("carrossel__preenchimento--completo");

  elemCarrosselImagens.style = "transform: translateX(-" + i * 100 + "%)";

  elemsCarrosselBotao[i]
    .querySelector("div")
    .classList.add("carrossel__preenchimento--completo");

  var proxItem = i + 1;

  if (i == elemsCarrosselBotao.length - 1) {
    proxItem = 0;
  }

  setTimeout(function () {
    rodarCarrossel(proxItem);
  }, 5000);
}

setTimeout(function () {
  rodarCarrossel(0);
}, 1000);

// Scripts do cabeçalho
var eleCabecalhoMenu = document.querySelector(".cabecalho__menu");
var eleCabecalho = document.querySelector(".cabecalho");
var elemsItemLista = document.querySelectorAll(".cabecalho__item-lista");

eleCabecalhoMenu.addEventListener("click", function () {
  eleCabecalho.classList.toggle("cabecalho--aberto");

  elemsItemLista.forEach(function (ele) {
    ele.querySelector(".cabecalho__link").href = "javascript: void(0)";
  });
});

elemsItemLista.forEach(function (ele) {
  ele.addEventListener("click", function () {
    ele.classList.toggle("cabecalho__item-lista--aberto");
  });
});

var eleCabecalhoLogin = document.querySelector(".cabecalho__icone-login");
var eleInfosPerfil = document.querySelector(".cabecalho__informacoes-perfil");

eleCabecalhoLogin.addEventListener("click", function () {
  eleInfosPerfil.classList.toggle("cabecalho__informacoes-perfil--aberto");
});
