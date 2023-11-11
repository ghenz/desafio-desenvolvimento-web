const header = `
    <header id="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mx-2">
        <a class="navbar-brand" href="home.html">Unidemy</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="home.html">Início</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="listarCursos.html">Cursos</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
`

document.body.innerHTML = header + document.body.innerHTML;



