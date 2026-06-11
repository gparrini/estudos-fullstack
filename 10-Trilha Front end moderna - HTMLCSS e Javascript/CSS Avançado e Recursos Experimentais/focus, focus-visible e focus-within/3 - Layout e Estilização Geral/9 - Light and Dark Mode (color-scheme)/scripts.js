var elemSelect = document.querySelector("#select");

elemSelect.addEventListener("change", function () {
  if (elemSelect.value == "sistema") {
    document.documentElement.removeAttribute("modo-light-dark");
  } else if (elemSelect.value == "light") {
    document.documentElement.setAttribute("modo-light-dark", "light");
  } else {
    document.documentElement.setAttribute("modo-light-dark", "dark");
  }

  console.log(elemSelect.value);
});
