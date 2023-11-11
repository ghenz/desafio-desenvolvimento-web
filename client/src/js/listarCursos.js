function retornaEstrelaPelaNota(nota) {
  let estrelas = ""
  for (let index = 1; index <= 5; index++) {
    estrelas += `<span class="fa fa-star ${nota >= index ? 'checked' : ''}"></span>`
  }
  return estrelas
}

const spinner = document.querySelector('.spinner-border');
const titulo = document.querySelector('#titulo');
const divLista = document.querySelector('#lista-cursos');

setTimeout(() => {
  titulo.innerText = "Lista de cursos"
}, 100);

setTimeout(async () => { 
  
  const cursos = await fetch('http://localhost:3000/cursos').then(response => response.json());
  console.log(cursos);
  divLista.innerHTML = cursos.map((curso) => {
    return `
          <a class="nav-link" href="detalheCurso.html?id=${curso.id}">
            <div class="card my-3 mx-1 p-4 d-flex flex-row">
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center">
                  <img src="${curso.logoTecnologia}"/>
                  <h2 class="ms-2">${curso.nome}</h2>
                </div>
                <span class="mt-2">${curso.descricao}</span>
                <span>${curso.autor}</span>
                <span>${curso.nota} ${retornaEstrelaPelaNota(curso.nota)}</span>
                <span>${curso.tempo} . ${curso.aulas.length} aulas</span>
              </div>
            </div>
          </a>
    `;
  }).join('');

  spinner.style.display = 'none';
}, 456);
  




