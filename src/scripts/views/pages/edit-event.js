import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import APIsource from '../../global/API-source';
import { createFormUpdateEventTemplate } from '../templates/template-form';

const EditEvent = {
  async render() {
    return `
    <section id="update-event">
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const updateContainer = document.querySelector('#update-event');

    try {
      const eventItem = await APIsource.detailEvent(url.id);
      updateContainer.innerHTML = createFormUpdateEventTemplate(eventItem);
    } catch (err) {
      console.log(err);
    }

    const submitEvent = document.querySelector('#submitEvent');
    const cancelEvent = document.querySelector('#cancelEvent');
    const editNameEvent = document.querySelector('#editNameEvent');
    const editLocationEvent = document.querySelector('#editLocationEvent');
    const editDateEvent = document.querySelector('#editDateEvent');
    const editTimeEvent = document.querySelector('#editTimeEvent');
    const editTimezoneEvent = document.querySelector('#editTimezoneEvent');
    const editTagsEvent = document.querySelector('#editTagsEvent');
    const editImageEvent = document.querySelector('#editImageEvent');
    const editDescriptionEvent = document.querySelector('#editDescriptionEvent');

    submitEvent.addEventListener('click', async (event) => {
      event.preventDefault();
      if (!editNameEvent.value || !editLocationEvent.value || !editDateEvent.value
        || !editTimeEvent.value || !editTimezoneEvent.value || !editDescriptionEvent.value
        || !editImageEvent.value || !editTagsEvent.value) {
        Swal.fire({
          icon: 'error',
          title: 'Input tidak boleh kosong',
          text: 'Tolong isi bagian yang kosong!',
        });
      } else {
        const dataEvent = {
          name: editNameEvent.value,
          location: editLocationEvent.value,
          date: editDateEvent.value,
          time: editTimeEvent.value,
          timezone: editTimezoneEvent.value,
          description: editDescriptionEvent.value,
          pictureId: editImageEvent.value,
          categories: editTagsEvent.value,
        };
        Swal.fire({
          title: 'Yakin untuk memperbarui event?',
          text: 'Pastikan permbaruan sudah benar!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirm',
        }).then(async (result) => {
          if (result.isConfirmed) {
            await APIsource.editEvent(url.id, dataEvent);
            Swal.fire(
              'Updated!',
              'Event berhasil diperbarui.',
              'success',
            );
            window.location.href = `#/detail-event/${url.id}`;
            window.scrollTo(0, 0);
          }
        });
      }
    });

    cancelEvent.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = `#/detail-event/${url.id}`;
      window.scrollTo(0, 0);
    });
  },
};

export default EditEvent;
