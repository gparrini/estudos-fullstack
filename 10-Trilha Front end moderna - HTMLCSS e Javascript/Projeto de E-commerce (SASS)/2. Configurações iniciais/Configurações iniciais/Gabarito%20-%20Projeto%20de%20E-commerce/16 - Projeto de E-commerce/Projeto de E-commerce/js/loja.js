// Scripts do Menu Lateral
var elemsMenuCabecalho = document.querySelectorAll(
  ".menu__expansivel-cabecalho"
);

elemsMenuCabecalho.forEach(function (ele) {
  ele.addEventListener("click", function () {
    ele.parentElement.classList.toggle("menu__expansivel--aberto");
  });
});
