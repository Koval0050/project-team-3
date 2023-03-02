(() => {
    const refs = {
      openModalBtn: document.querySelector("[js-modal-open]"),
      closeModalBtn: document.querySelector("[js-modal-close]"),
      modal: document.querySelector("[js-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();