const buys = JSON.parse(localStorage.getItem("carrinhoItens")) || [];

$("#lista-cursos").on("click", "#add-to-cart-button", function (event) {
  event.preventDefault();

  buys.push("oi");

  const numeroItens = buys.length;
  $("#cart").attr("data-count", numeroItens);

  localStorage.setItem("carrinhoItens", JSON.stringify(buys));
});
