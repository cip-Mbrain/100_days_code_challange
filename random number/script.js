const number = document.querySelector('.number');
const generate = document.querySelector('.generate');

generate.addEventListener('click', function () {
  const randNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randNumber;
});
