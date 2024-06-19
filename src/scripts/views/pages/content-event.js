import APIsource from '../../global/API-source';
import {
  createContentEventTemplate,
  createSkeletonEventTemplate,
  createLoadingText,
  createAfterLoadingText,
  createCardEmpty,
  createCategoryNotFound,
} from '../templates/template-content';

const ContentEvent = {
  async render() {
    return `
        <hero-jumbotron></hero-jumbotron>

        <section id="event">
            <div class="container-fluid col-11 px-4 pt-3 pb-3 mt-4 mb-3 mb-md-0">
                <div class="row">
                    <div class="col-md-8">
                        <h2>Event</h2>
                        <p class="lead">Berbagai macam aktivitas dan event wisata di Indonesia</p>
                    </div>
                    <div class="col-md-4 my-auto d-flex justify-content-md-end">
                        <a href="#/create-event" onclick="window.scrollTo(0, 0);"><button type="button" class="btn btn-green px-3 py-2" tabindex="-1">Buat Event Baru</button></a>
                    </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <form class="mt-5 mt-md-4">
                      <div class="form-floating mb-4">
                        <select class="form-select" id="findTagsEvent" aria-label="Selecting Categories Event">
                          <option value="All">Semua Kategori</option>
                          <option value="Sejarah">Sejarah</option>
                          <option value="Cagar Alam">Cagar Alam (Ecotourism)</option>
                          <option value="Pantai">Pantai</option>
                          <option value="Kuliner">Kuliner</option>
                          <option value="Belanja">Belanja</option>
                          <option value="Religi">Religi</option>
                          <option value="Petualangan">Petualangan</option>
                          <option value="Seni & Budaya">Seni & Budaya</option>
                          <option value="Edukasi">Edukasi</option>
                          <option value="Keluarga">Keluarga</option>
                        </select>
                        <label for="findTagsEvent">Kategori</label>
                      </div>
                    <form>
                  </div>
                  <div class="col-md-4 my-auto d-flex justify-content-center justify-content-md-start">
                      <button id="btnFind" type="button" class="btn btn-green px-3 py-2" tabindex="-1">Cari Kategori</button>
                  </div>
                </div>
            </div>

            <div class="container-fluid col-11 px-4 py-3 mb-4">
              <div class="row" id="loading-event"></div>
              <div class="row" id="card-events"></div>
              <div class="row" id="category-events"></div>
            </div>
        </section>

        <hero-interested></hero-interested>
      `;
  },

  async afterRender() {
    const eventContainer = document.querySelector('#card-events');
    const categoryContainer = document.querySelector('#category-events');
    const btnFind = document.querySelector('#btnFind');
    const findTagsEvent = document.querySelector('#findTagsEvent');
    const loadEvent = document.querySelector('#loading-event');
    loadEvent.innerHTML = createLoadingText();

    try {
      const eventCard = await APIsource.contentEvents();
      eventCard.reverse().forEach((allEvents) => {
        eventContainer.innerHTML += createContentEventTemplate(allEvents);
      });

      loadEvent.style.display = 'none';
      if (!eventCard.length) {
        eventContainer.innerHTML = createCardEmpty();
      }

      btnFind.addEventListener('click', async (event) => {
        event.preventDefault();
        if (findTagsEvent.value === 'All') {
          eventContainer.style.display = 'flex';
          categoryContainer.style.display = 'none';
        } else {
          eventContainer.style.display = 'none';
          categoryContainer.style.display = 'flex';
          if (findTagsEvent.value === 'Sejarah') {
            this.category = 'Sejarah';
          } else if (findTagsEvent.value === 'Cagar Alam') {
            this.category = 'Cagar Alam';
          } else if (findTagsEvent.value === 'Pantai') {
            this.category = 'Pantai';
          } else if (findTagsEvent.value === 'Kuliner') {
            this.category = 'Kuliner';
          } else if (findTagsEvent.value === 'Belanja') {
            this.category = 'Belanja';
          } else if (findTagsEvent.value === 'Religi') {
            this.category = 'Religi';
          } else if (findTagsEvent.value === 'Petualangan') {
            this.category = 'Petualangan';
          } else if (findTagsEvent.value === 'Seni & Budaya') {
            this.category = 'Seni & Budaya';
          } else if (findTagsEvent.value === 'Edukasi') {
            this.category = 'Edukasi';
          } else {
            this.category = 'Keluarga';
          }
          loadEvent.style.display = 'flex';
          const categoryCard = await APIsource.findCategoryEvent(this.category);
          categoryContainer.innerHTML = '';
          categoryCard.reverse().forEach((allArticle) => {
            categoryContainer.innerHTML += createContentEventTemplate(allArticle);
          });
          loadEvent.style.display = 'none';
          if (categoryContainer.innerHTML === '') {
            categoryContainer.innerHTML = createCategoryNotFound(findTagsEvent.value);
          }
        }
      });
    } catch (err) {
      loadEvent.innerHTML = createAfterLoadingText(err);
      eventContainer.innerHTML += createSkeletonEventTemplate(4);
      console.log(err);
    }
  },
};

export default ContentEvent;
