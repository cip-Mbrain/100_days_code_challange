const btn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

btn.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', function () {
  modal.classList.remove('show-modal');
});
