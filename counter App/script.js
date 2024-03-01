// const count = document.querySelector('.count');
// const add = document.querySelector('.add');
// const resetCount = document.querySelector('.reset');
// const sub = document.querySelector('.subtract');

// add.addEventListener('click', () => {
//   count.innerHTML++;
//   count.style.color = 'blue';
// });

// sub.addEventListener('click', () => {
//   count.innerHTML--;
//   count.style.color = 'red';
// });

// resetCount.addEventListener('click', () => {
//   count.innerHTML = 0;
//   count.style.color = 'black';
// });

let value = 0;
const count = document.querySelector('.count');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', (e) => {
    const style = e.currentTarget.classList;
    if (style.contains('subtract')) {
      value--;
    } else if (style.contains('add')) {
      value++;
    } else {
      value = 0;
    }
    count.textContent = value;
    if (value < 0) {
      count.style.color = 'red';
    }
    if (value > 0) {
      count.style.color = 'blue';
    }
    if (value == 0) {
      count.style.color = 'black';
    }
  });
});
