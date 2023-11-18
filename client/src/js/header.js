const carrinhoItens = JSON.parse(localStorage.getItem('carrinhoItens')) || [];

const header = `
    <header class="fixed-top" id="header">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="home.html">Unidemy</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-flex align-items-lg-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="listarCursos.html">Cursos</a>
              </li>
              ${
                window.location.pathname.includes("listarCursos.html") ||
                window.location.pathname.includes("carrinhoCompras.html")
                  ? `<li class="nav-item cart" id="cart" data-count="${carrinhoItens.length}"><a class="nav-link" href="../paginas/carrinhoCompras.html"><img class="img-fluid" src="../assets/images/cart.png" alt="Carrinho" style="width: 30px; height: 30px;"></a></li>`
                  : ""
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
`;

document.body.innerHTML = header + document.body.innerHTML;
