const spinner = document.querySelector('.spinner-border');
const divDetalhe = document.querySelector('#detalhe-curso');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')

function retornaEstrelaPelaNota(nota) {
  let estrelas = ""
  for (let index = 1; index <= 5; index++) {
    estrelas += `<span class="fa fa-star ${nota >= index ? 'checked' : ''}"></span>`
  }
  return estrelas
}

setTimeout(async () => { 
  const curso = await fetch(`http://localhost:3000/cursos/${id}`).then(response => response.json());

  divDetalhe.innerHTML = `
    <div class="my-3 mx-1 p-4 d-flex flex-column">
      <section>
        <div class="d-flex flex-row align-items-center gap-2">
          <img src="${curso.logoTecnologia}"/>
          <h2 class="ms-1">${curso.nome}</h2>
        </div>
        <div class="my-2">${curso.tecnologiasUtilizadas.join(', ')}</div>
        <div class="my-2 d-flex gap-2">
          <span>${curso.nota}</span> 
          <span>${retornaEstrelaPelaNota(curso.nota)}</span>
          <span>${curso.numeroAlunos} alunos</span>
        </div>

        <span>Criado por ${curso.autor}</span>
      </section>

      <section class="my-4">
        <div class="card p-2">
          <h3 class="mt-3">O que você aprenderá</h3>
          <ul>
            ${curso.oQueAprendera.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <div>
          <h3 class="mt-3">Conteúdo do curso</h3>
          ${curso.aulas.map((aula) => (
            `
              <div class="card p-2 mb-3">
                <h4 class="mt-3">${aula.nome}</h4>
                <ul>
                  ${aula.secoes.map((secao) => `<li>${secao.nome} (${secao.tempo})</li>`).join('')}
                </ul>
              </div>
            `
          )).join('')}
      </div>

      <section class=">
        <div class="">
          <h3 class="mt-3">Requisitos</h3>
          <p>${curso.requisitos}</p>
        </div>
      </section>
    </div>
  `;  

  spinner.style.display = 'none';
}, 456);
  




