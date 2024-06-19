import APIsource from '../../global/API-source';
import {
  createContentArticleTemplate,
  createSkeletonArticleTemplate,
  createLoadingText,
  createAfterLoadingText,
  createCardEmpty,
  createCategoryNotFound,
} from '../templates/template-content';

const ContentArticle = {
  async render() {
    return `
        <hero-jumbotron></hero-jumbotron>

        <section id="article">
            <div class="container-fluid col-11 px-4 pt-3 pb-3 mt-4 mb-3 mb-md-0">
                <div class="row">
                    <div class="col-md-8">
                        <h2>Artikel</h2>
                        <p class="lead">Artikel dari Wisata Wonders</p>
                    </div>
                    <div class="col-md-4 my-auto d-flex justify-content-md-end">
                        <a href="#/create-article" onclick="window.scrollTo(0, 0);"><button type="button" class="btn btn-green px-3 py-2" tabindex="-1">Buat Artikel Baru</button></a>
                    </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <form class="mt-5 mt-md-4">
                      <div class="form-floating mb-4">
                        <select class="form-select" id="findTagsArticle" aria-label="Selecting Categories Article">
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
                        <label for="findTagsArticle">Kategori</label>
                      </div>
                    <form>
                  </div>
                  <div class="col-md-4 my-auto d-flex justify-content-center justify-content-md-start">
                      <button id="btnFind" type="button" class="btn btn-green px-3 py-2" tabindex="-1">Cari Kategori</button>
                  </div>
                </div>
            </div>

            <div class="container-fluid col-11 px-4 py-3 mb-4">
              <div class="row" id="loading-article"></div>
              <div class="row" id="card-articles"></div>
              <div class="row" id="category-articles"></div>
            </div>
        </section>

        <hero-interested></hero-interested>
      `;
  },

  async afterRender() {
    const articleContainer = document.querySelector('#card-articles');
    const categoryContainer = document.querySelector('#category-articles');
    const btnFind = document.querySelector('#btnFind');
    const findTagsArticle = document.querySelector('#findTagsArticle');
    const loadArticle = document.querySelector('#loading-article');
    loadArticle.innerHTML = createLoadingText();

    try {
      const articleCard = await APIsource.contentArticles();
      articleCard.reverse().forEach((allArticle) => {
        articleContainer.innerHTML += createContentArticleTemplate(allArticle);
      });

      loadArticle.style.display = 'none';
      if (!articleCard.length) {
        articleContainer.innerHTML = createCardEmpty();
      }

      btnFind.addEventListener('click', async (event) => {
        event.preventDefault();
        if (findTagsArticle.value === 'All') {
          articleContainer.style.display = 'flex';
          categoryContainer.style.display = 'none';
        } else {
          articleContainer.style.display = 'none';
          categoryContainer.style.display = 'flex';
          if (findTagsArticle.value === 'Sejarah') {
            this.category = 'Sejarah';
          } else if (findTagsArticle.value === 'Cagar Alam') {
            this.category = 'Cagar Alam';
          } else if (findTagsArticle.value === 'Pantai') {
            this.category = 'Pantai';
          } else if (findTagsArticle.value === 'Kuliner') {
            this.category = 'Kuliner';
          } else if (findTagsArticle.value === 'Belanja') {
            this.category = 'Belanja';
          } else if (findTagsArticle.value === 'Religi') {
            this.category = 'Religi';
          } else if (findTagsArticle.value === 'Petualangan') {
            this.category = 'Petualangan';
          } else if (findTagsArticle.value === 'Seni & Budaya') {
            this.category = 'Seni & Budaya';
          } else if (findTagsArticle.value === 'Edukasi') {
            this.category = 'Edukasi';
          } else {
            this.category = 'Keluarga';
          }
          loadArticle.style.display = 'flex';
          const categoryCard = await APIsource.findCategoryArticle(this.category);
          categoryContainer.innerHTML = '';
          categoryCard.reverse().forEach((allArticle) => {
            categoryContainer.innerHTML += createContentArticleTemplate(allArticle);
          });
          loadArticle.style.display = 'none';
          if (categoryContainer.innerHTML === '') {
            categoryContainer.innerHTML = createCategoryNotFound(findTagsArticle.value);
          }
        }
      });
    } catch (err) {
      loadArticle.innerHTML = createAfterLoadingText(err);
      articleContainer.innerHTML += createSkeletonArticleTemplate(4);
      console.log(err);
    }
  },
};

export default ContentArticle;
