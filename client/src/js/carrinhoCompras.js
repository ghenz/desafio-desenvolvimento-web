const buys = JSON.parse(localStorage.getItem("carrinhoItens")) || [];
const courses = JSON.parse(localStorage.getItem("cursos")) || [];

$("#lista-cursos").on("click", "#add-to-cart-button", (event) => {
  event.preventDefault();

  const button = $(event.target);

  const element = event.target.closest("a").firstElementChild;

  const alreadyPurchased = buys.some((item) => {
    return item === element.id;
  });

  if (element && !alreadyPurchased) {
    buys.push(element.id);

    const numeroItens = buys.length;

    $("#cart").attr("data-count", numeroItens);

    localStorage.setItem("carrinhoItens", JSON.stringify(buys));

    alert("✅ Curso adicionado ao carrinho!");

    button.css({
      opacity: "25%",
      cursor: "not-allowed",
    });
  } else {
    alert("❌ O curso já está no carrinho!");
  }
});

/* Layout do carrinho de compras */
function updateShoppingCart(buys) {
  let totalPrice = 0;

  setTimeout(async () => {
    $("#lista-cursos").html(
      courses.map((course) => {
        if (buys.includes(course.id)) {
          totalPrice += course.preco;

          return `
            <div class="card my-3 p-4 d-flex flex-md-row justify-content-between" id=${
              course.id
            }>
              <div class="d-flex flex-column justify-content-center">
                <div class="d-flex flex-row align-items-center gap-2">
                  <img class="courses-icon" src="${course.logoTecnologia}"/>
                  <h2 class="ms-1">${course.nome}</h2>
                </div>
              </div>

              <div class="d-flex flex-md-column justify-content-between align-items-baseline price-div">
                <h5 class="mt-2 pt-2 text-end"><strong>${course.preco.toLocaleString(
                  "pt-BR",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}</strong></h5>
                <p class="text-end">
                  <button type="button" class="btn-sm delete-from-cart-button" id='delete-from-cart-button-${
                    course.id
                  }'>Remover</button>
                </p>
              </div>
            </div>
          `;
        }
      })
    );

    if (buys.length == 0) {
      $("#lista-cursos").append(`
        <p class="empty-cart-msg">Não existem cursos no carrinho</p>
        <p><a class="link-opacity-100 buy-courses" href="../paginas/listarCursos.html">Comprar cursos</a></p>
      `);
    } else {
      $("#lista-cursos").append(`
      <div class="d-flex justify-content-between">
        <p class="total-price">Total: ${totalPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}</p>
        <div>
          <button type="button" class="btn btn-success btn-md" id="buy-button">Comprar</button>
          <button type="button" class="btn btn-danger btn-md" id="delete-all-from-cart-button">Remover todos</button>
        </div>
      </div>
    `);
    }

    /* Não exibe ou não o botão de voltar */
    if ($(".total-price").length > 0) {
      $("#back-button").css("display", "block");
    } else {
      $("#back-button").css("display", "none");
    }

    $("#buy-button").on("click", () => {
      alert("✅ Compra realizada com sucesso!");
      clearShoppingCart(buys);
    });

    $(".spinner-border").css("display", "none");
  }, 456);
}

updateShoppingCart(buys);

/* Deletar compras do carrinho */
$("#lista-cursos").on("click", ".delete-from-cart-button", (event) => {
  $(".spinner-border").css("display", "block");

  buys.splice(
    buys.findIndex((curso) => event.target.id.includes(curso)),
    1
  );

  localStorage.setItem("carrinhoItens", JSON.stringify(buys));

  updateShoppingCart(buys);

  $("#cart").attr("data-count", buys.length);

  setTimeout(async () => {
    $(".spinner-border").css("display", "none");
  }, 456);
});

/* Deletar todas as compras do carrinho */
$("#lista-cursos").on("click", "#delete-all-from-cart-button", () => {
  clearShoppingCart(buys);
});

function clearShoppingCart(buys) {
  $(".spinner-border").css("display", "block");

  buys.splice(0, buys.length);

  localStorage.setItem("carrinhoItens", JSON.stringify(buys));

  updateShoppingCart(buys);

  $("#cart").attr("data-count", buys.length);

  setTimeout(async () => {
    $(".spinner-border").css("display", "none");
  }, 456);
}
