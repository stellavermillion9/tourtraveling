import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import APIsource from '../../global/API-source';
import { createDetailArticleTemplate } from '../templates/template-detail';

const DetailArticle = {
  async render() {
    return `
    <section id="detail-article">
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#detail-article');

    try {
      const articleItem = await APIsource.detailArticle(url.id);
      detailContainer.innerHTML = createDetailArticleTemplate(articleItem);
    } catch (err) {
      console.log(err);
    }

    const submitReview = document.querySelector('#submitReview');
    const inputName = document.querySelector('#inputUserReview');
    const inputReview = document.querySelector('#inputReviewArticle');

    submitReview.addEventListener('click', async (event) => {
      event.preventDefault();
      if (!inputName.value || !inputReview.value) {
        Swal.fire({
          icon: 'error',
          title: 'Review tidak boleh kosong!.',
          text: 'Tolong isi bagian yang kosong!.',
        });
      } else {
        const dataReview = {
          _id: url.id,
          name: inputName.value,
          review: inputReview.value,
        };
        await APIsource.addReviewArticle(dataReview);
        Swal.fire({
          icon: 'success',
          title: 'Review anda telah ditambahkan',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
        }).then(async (result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      }
    });

    const submitDelete = document.querySelector('#deleteArticle');

    submitDelete.addEventListener('click', (event) => {
      event.preventDefault();
      Swal.fire({
        title: 'Yakin untuk menghapus artikel ?',
        text: 'Artikel yang terhapus tidak dapat dikembalikan!.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await APIsource.removeArticle(url.id);
          Swal.fire(
            'Artikel dihapus!.',
            'Artikel berhasil dihapus!.',
            'success',
          );
          window.location.href = '#/content-article';
          window.scrollTo(0, 0);
        }
      });
    });
  },
};

export default DetailArticle;
