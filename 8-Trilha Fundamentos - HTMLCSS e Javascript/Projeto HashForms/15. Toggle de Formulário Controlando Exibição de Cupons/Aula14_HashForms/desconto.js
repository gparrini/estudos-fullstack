/* Toggle significa alternar entre dois estados possíveis. 
É frequentemente usado em interfaces de usuário e programação para representar algo que pode ser "ligado/desligado" ou "ativo/inativo".
*/

//Função para alternar a exibição do formulário de cupom
function toggleDiscount() {
  const discountBody = document.getElementById("apply-discount-body");
  const icon = document.getElementById("toggle-icon");

  // Alterna a visibilidade do formulário de desconto
  if (
    discountBody.style.display === "none" ||
    discountBody.style.display === ""
  ) {
    discountBody.style.display = "block";
    icon.classList.add("bx-chevron-up");
    icon.classList.remove("bx-chevron-down");
  } else {
    discountBody.style.display = "none";
    icon.classList.add("bx-chevron-down");
    icon.classList.remove("bx-chevron-up");
  }
}
// <i class='bx bxs-chevron-up' ></i> - ICONE DA SETA PRA CIMA
