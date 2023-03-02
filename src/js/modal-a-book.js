(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-book]'),
    closeModalBtn: document.querySelector('[data-modal-close-book]'),
    modal: document.querySelector('[data-moda-book]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
