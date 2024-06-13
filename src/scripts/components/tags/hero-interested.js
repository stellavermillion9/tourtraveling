class HeroInterested extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="hero-interested">
        <div class="container-fluid col-11 px-4 pb-2 mb-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 my-3">
              <div class="col-10 col-sm-8 col-lg-6">
                <img 
                  src="images/people-travelling.png" 
                  class="d-block mx-lg-auto img-fluid" 
                  alt="two traveler with backpack and map" 
                  width="650px" height="300px"
                >
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Header interested</h1>
                <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <a href="#" class="color-bookingcom linkhov-deco fw-bold" target="_blank">Link to travel</a> or <a href="#" class="color-traveloka linkhov-deco fw-bold" target="_blank">Link to travel 2</a>. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
    </section>
      `;
  }
}
customElements.define('hero-interested', HeroInterested);
