function retornaEstrelaPelaNota(nota) {
  let estrelas = "";
  for (let index = 1; index <= 5; index++) {
    estrelas += `<span class="fa fa-star ${
      nota >= index ? "checked" : ""
    }"></span>`;
  }
  return estrelas;
}

const spinner = document.querySelector(".spinner-border");
const divLista = document.querySelector("#lista-cursos");

setTimeout(async () => {
  const cursos = await fetch("http://localhost:3000/cursos").then((response) =>
    response.json()
  );

  console.log(cursos)

  divLista.innerHTML = cursos
    .map((curso) => {
      return `
          <a class="nav-link" href="detalheCurso.html?id=${curso.id}" id=${curso.id}>
            <div class="card my-3 mx-1 p-4 d-flex flex-md-row justify-content-between">
              <div class="d-flex flex-column">
                <div class="d-flex flex-row align-items-center gap-2">
                  <img class="courses-icon" src="${curso.logoTecnologia}"/>
                  <h2 class="ms-1">${curso.nome}</h2>
                </div>
                <span class="mt-2">${curso.descricao}</span>
                <span>${curso.autor}</span>
                <span>${curso.nota} ${retornaEstrelaPelaNota(curso.nota)} (${
        curso.numeroAlunos
      })</span>
                <span>${curso.tempo} no total . ${
        curso.aulas.length
      } aulas</span>
              </div>
              <div class="d-flex flex-md-column justify-content-between align-items-end price-div">
                <h5 class="mt-2 pt-2 text-end"><strong>R$${
                  curso.preco
                }</strong></h5>
                <p class="text-end">
                  <button type="button" class="btn-sm add-to-cart-button" id="add-to-cart-button">Adicionar ao carrinho</button>
                </p>
              </div>
              
            </div>
          </a>
    `;
    })
    .join("");

  spinner.style.display = "none";
}, 456);
