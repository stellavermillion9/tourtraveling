class HeroJumbotronWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="hero-jumbotron">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item hero active">
              <img
                width="100%" height="360px" 
                src="images/hero-image-borobudur.jpg" 
                alt="Candi Borobudur"
                class="lazyload"
              />
              <div class="hero-text pos-fix-hero">
                <h1>Candi Borobudur</h1>
                <p><i class="fa fa-map-marker me-2"></i>Jawa Tengah, Indonesia</p>
              </div>
            </div>
            <div class="carousel-item hero">
              <img
                width="100%" height="360px" 
                src="images/hero-image-raja-ampat.jpg" 
                alt="Raja Ampat"
                class="lazyload"
              />
              <div class="hero-text pos-fix-hero">
                <h1>Raja Ampat</h1>
                <p><i class="fa fa-map-marker me-2"></i>Papua, Indonesia</p>
              </div>
            </div>
            <div class="carousel-item hero">
              <img
                width="100%" height="360px" 
                src="images/hero-image-pantai-kuta.jpg" 
                alt="Pantai Kuta"
                class="lazyload"
              />
              <div class="hero-text pos-fix-hero">
                <h1>Pantai Kuta</h1>
                <p><i class="fa fa-map-marker me-2"></i>Bali, Indonesia</p>
              </div>
            </div>
            <div class="carousel-item hero">
              <img
                width="100%" height="360px" 
                src="images/hero-image-danau-toba.jpg" 
                alt="Danau Toba"
                class="lazyload"
              />
              <div class="hero-text pos-fix-hero">
                <h1>Danau Toba</h1>
                <p><i class="fa fa-map-marker me-2"></i>Sumatra, Indonesia</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          </div>
      </section>
    `;
  }
}
customElements.define('hero-jumbotron', HeroJumbotronWeb);
