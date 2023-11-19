/* Carrega os cursos dinamicamente no carousel */
(async () => {
  const response = await fetch("http://localhost:3000/cursos");
  const cursos = await response.json();

  localStorage.setItem("cursos", JSON.stringify(cursos));

  const carouselInner = $(".carousel-inner");
  const carouselIndicators = $(".carousel-indicators");

  cursos.forEach((curso, index) => {
    const activeClass = index === 0 ? "active" : "";

    carouselIndicators.append(`
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to='${index}'
        class=${activeClass}
        aria-current="true"
        aria-label='Slide ${index + 1}'
      ></button>
    `);

    carouselInner.append(`
      <div class="carousel-item ${activeClass}" data-bs-interval="10000">
        <img
          src="${curso.logoTecnologia}"
          class="d-block"
          alt="..."
          style="margin: 0 auto; object-fit: contain; height: 300px;"
        />
        <div class="carousel-caption d-none d-md-block glass-carousel p-3">
          <h5 class="fs-3 fw-bold">${curso.tecnologia}</h5>
          <p class="fs-5 fw-medium">${curso.descricao}</p>
        </div>
      </div>
    `);
  });
})();

/* Inicia o caurosel automaticamente */
const carousel = new bootstrap.Carousel("#carouselExampleDark");

setInterval(function () {
  $(".carousel").carousel("next");
}, 5000);
