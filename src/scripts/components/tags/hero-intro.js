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
                  alt="two traveler with backpack and map" 
                  width="650px" height="300px"
                >
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Header introduction</h1>
                <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae maiores, unde ea cum quisquam error officiis assumenda ratione fugit consequuntur reiciendis sequi inventore. Culpa aspernatur quasi asperiores nulla provident nesciunt!<strong class="fw-bold color-ctn">Hightligth Text!</strong>
                </p>
              </div>
            </div>
          </div>
    </section>
    `;
  }
}
customElements.define('hero-intro', HeroIntroWeb);
