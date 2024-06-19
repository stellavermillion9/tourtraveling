class HeroIntroWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="hero-intro">
        <div class="container-fluid col-11 px-4 pb-2 mb-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 my-3">
              <div class="col-10 col-sm-8 col-lg-6">
                <img 
                  src="images/two-traveler.png" 
                  class="d-block mx-lg-auto img-fluid" 
                  alt="two traveler" 
                  width="650px" height="300px"
                >
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Jelajahi Wisata di Indonesia</h1>
                <p class="lead">Indonesia, sebuah negara kepulauan yang terdiri dari lebih dari 17.000 pulau, menawarkan keanekaragaman wisata dan budaya yang luar biasa. Dari keindahan alam seperti pantai-pantai eksotis di Bali, Raja Ampat, dan Lombok, hingga kekayaan budaya tradisional seperti tari Kecak di Bali, wayang kulit di Jawa, serta upacara adat Toraja di Sulawesi. Indonesia juga terkenal dengan keanekaragaman kuliner yang kaya rasa, seperti rendang, nasi goreng, dan sate. Selain itu, warisan sejarah seperti Candi Borobudur dan Prambanan menambah daya tarik wisata Indonesia, menjadikannya destinasi yang memikat bagi wisatawan domestik maupun internasional. <strong class="fw-bold color-ww">Ayo jelajahi!</strong>
                </p>
              </div>
            </div>
          </div>
    </section>
    `;
  }
}
customElements.define('hero-intro', HeroIntroWeb);
