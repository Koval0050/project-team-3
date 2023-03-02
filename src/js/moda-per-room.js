(() => {
    const refs = {
      openModalBtn: document.querySelector("up-modal-open]"),
      closeModalBtn: document.querySelector("[up-modal-close]"),
      modal: document.querySelector("[up-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();