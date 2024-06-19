import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import APIsource from '../../global/API-source';
import { createFormUpdateArticleTemplate } from '../templates/template-form';
import { setInputDateToday } from '../../utils/set-input-today';

const EditArticle = {
  async render() {
    return `
    <section id="update-article">
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const updateContainer = document.querySelector('#update-article');

    try {
      const articleItem = await APIsource.detailArticle(url.id);
      updateContainer.innerHTML = createFormUpdateArticleTemplate(articleItem);
    } catch (err) {
      console.log(err);
    }

    const submitArticle = document.querySelector('#submitArticle');
    const cancelArticle = document.querySelector('#cancelArticle');
    const editHeadineArticle = document.querySelector('#editHeadineArticle');
    const editPublisherName = document.querySelector('#editPublisherName');
    const editDateArticle = document.querySelector('#editDateArticle');
    const editTagsArticle = document.querySelector('#editTagsArticle');
    const editImageArticle = document.querySelector('#editImageArticle');
    const editDescriptionArticle = document.querySelector('#editDescriptionArticle');

    setInputDateToday(editDateArticle);

    submitArticle.addEventListener('click', async (event) => {
      event.preventDefault();
      if (!editHeadineArticle.value || !editDescriptionArticle.value || !editImageArticle.value
        || !editPublisherName.value || !editDateArticle.value || !editTagsArticle.value) {
        Swal.fire({
          icon: 'error',
          title: 'Input tidak boleh kosong!',
          text: 'Tolong isi bagian yang kosong!',
        });
      } else {
        const dataArticle = {
          name: editHeadineArticle.value,
          description: editDescriptionArticle.value,
          pictureId: editImageArticle.value,
          publisherName: editPublisherName.value,
          publishDate: editDateArticle.value,
          categories: editTagsArticle.value,
        };
        Swal.fire({
          title: 'Apa kamu yakin untuk mengubah artikel ini?',
          text: 'Pastikan perubahanmu sudah benar!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirm',
        }).then(async (result) => {
          if (result.isConfirmed) {
            await APIsource.editArticle(url.id, dataArticle);
            Swal.fire(
              'Updated!',
              'Artikel berhasil diperbarui.',
              'success',
            );
            window.location.href = `#/detail-article/${url.id}`;
            window.scrollTo(0, 0);
          }
        });
      }
    });

    cancelArticle.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = `#/detail-article/${url.id}`;
      window.scrollTo(0, 0);
    });
  },
};

export default EditArticle;
