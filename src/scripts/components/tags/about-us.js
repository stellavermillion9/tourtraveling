class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="hero-about">
        <div class="container-fluid col-11 px-4">
            <div class="row d-flex align-items-center g-5 mt-3">
              <div class="col-10 col-sm-8 col-lg-6">
                <img src="images/CTN logo.png" 
                  class="d-block mx-lg-auto img-fluid" 
                  alt="logo Culture and Tour Nusantara" 
                  width="320px" height="320px"
                >
              </div>
              <div class="col-lg-6">
                <h1 class="display-6 fw-bold lh-1 mb-3">About us</h1>
                <p class="lead"><strong class="fw-bold color-ctn">Wisata Wonders</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima atque natus error! Provident accusantium repudiandae optio quod error, ipsa dignissimos ex, eaque ullam modi quaerat consectetur eum ab. Soluta, minus?</p>
              </div>
            </div>
          </div>
      </section>

      <section id="hero-why">
        <div class="container-fluid col-11 px-4">
            <div class="row flex-lg-row-reverse align-items-center g-5 mt-5 mb-2 pb-4">
              <div class="col-10 col-sm-8 col-lg-6">
                <img src="images/question-people.png" 
                  class="d-block mx-lg-auto img-fluid" 
                  alt="two people having conversation for question" 
                  width="360px" height="360px"
                >
              </div>
              <div class="col-lg-6">
                <h1 class="display-6 fw-bold lh-1 mb-3">Kenapa Wisata Wonders?</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima atque natus error! Provident accusantium repudiandae optio quod error, ipsa dignissimos ex, eaque ullam modi quaerat consectetur eum ab. Soluta, minus?</p>
              </div>
            </div>
          </div>
      </section>

      <section id="Team">
        <div class="container-fluid col-11 px-4 py-2 mt-5 mb-2">
            <div class="text-center">
              <h2>Team Kami</h2>
              <p class="lead">Developer Website</p>
            </div>
        </div>

        <div class="container-fluid col-11 px-4 py-3 mb-4">
          <div class="row text-center">
            
            <div class="col-xl-3 col-md-6 mb-5 px-0 px-sm-4 px-md-3 px-xl-2">
              <div class="card bg-white border border-3 rounded-card shadow-lg py-5 px-4 h-100">
                <img src="images/blank-profile.png" 
                  class="img-fluid rounded-circle border border-3 mx-auto mb-3 shadow-sm" 
                  alt="Profile1" 
                  width="130px" height="130px"
                >
                <div class="card-body">
                  <h5 class="card-title color-ctn fw-bold mb-0">Profile 1</h2>
                  <p class="card-text medium text-lead pt-2 mb-1">Role 1</p>
                </div>
                <div class="d-flex justify-content-center mt-4 mb-2">
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-whatsapp"></i></button></a>
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-instagram"></i></button></a>
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-linkedin-square"></i></button></a>
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-github"></i></button></a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-5 px-0 px-sm-4 px-md-3 px-xl-2">
              <div class="card bg-white border border-3 rounded-card shadow-lg py-5 px-4 h-100">
                <img src="images/blank-profile.png" 
                  class="img-fluid rounded-circle border border-3 mx-auto mb-3 shadow-sm" 
                  alt="Profile1" 
                  width="130px" height="130px"
                >
                <div class="card-body">
                  <h5 class="card-title color-ctn fw-bold mb-0">Profile 2</h2>
                  <p class="card-text medium text-lead pt-2 mb-1">Role 2</p>
                </div>
                <div class="d-flex justify-content-center mt-4 mb-2">
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-whatsapp"></i></button></a>
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-instagram"></i></button></a>
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-linkedin-square"></i></button></a>
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-github"></i></button></a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-5 px-0 px-sm-4 px-md-3 px-xl-2">
              <div class="card bg-white border border-3 rounded-card shadow-lg py-5 px-4 h-100">
                <img src="images/blank-profile.png" 
                  class="img-fluid rounded-circle border border-3 mx-auto mb-3 shadow-sm" 
                  alt="Profile1" 
                  width="130px" height="130px"
                >
                <div class="card-body">
                  <h5 class="card-title color-ctn fw-bold mb-0">Profile 3</h2>
                  <p class="card-text medium text-lead pt-2 mb-1">Role 3</p>
                </div>
                <div class="d-flex justify-content-center mt-4 mb-2">
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-whatsapp"></i></button></a>
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-instagram"></i></button></a>
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-linkedin-square"></i></button></a>
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-github"></i></button></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
       `;
  }
}
customElements.define('about-us', AboutUs);
