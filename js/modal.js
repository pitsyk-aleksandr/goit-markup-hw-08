(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // При открытом модальном окне устанавливаются дополнительные классы
    // На тег body
    document.body.classList.toggle("modal-open");
    // На константу modal - точнее на тот элемент, у которого в теге есть атрибут data-modal
    refs.modal.classList.toggle("is-hidden");
  }
})();