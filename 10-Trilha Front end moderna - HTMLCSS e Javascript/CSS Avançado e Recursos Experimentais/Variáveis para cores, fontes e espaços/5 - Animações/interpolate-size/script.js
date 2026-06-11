let elemsItem = document.querySelectorAll(".item");

elemsItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("aberto");
  });
});
