const btn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', function () {
  // modal.classList.remove('show-modal');
  closeModal();
});
modal.addEventListener('click', function () {
  // modal.classList.remove('show-modal');
  closeModal();
});

function closeModal() {
  modal.classList.remove('show-modal');
}
