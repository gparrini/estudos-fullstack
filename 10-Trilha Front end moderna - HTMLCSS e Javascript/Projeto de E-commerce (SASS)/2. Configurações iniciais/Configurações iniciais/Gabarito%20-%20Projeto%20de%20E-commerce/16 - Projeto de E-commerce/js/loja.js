// Scripts do Menu Lateral
var elemsMenuCabecalho = document.querySelectorAll(
  ".menu__expansivel-cabecalho"
);

elemsMenuCabecalho.forEach(function (ele) {
  ele.addEventListener("click", function () {
    ele.parentElement.classList.toggle("menu__expansivel--aberto");
  });
});

// Script para abrir e fechar a tela de filtro
var elemFecharFiltro = document.querySelector(".menu__fechar-filtro");
var elemAbrirFiltro = document.querySelector(".produtos__cabecalho-filtrar");

elemFecharFiltro.addEventListener("click", function () {
  document.body.classList.remove("filtro-aberto");
});

elemAbrirFiltro.addEventListener("click", function () {
  document.body.classList.add("filtro-aberto");
});
