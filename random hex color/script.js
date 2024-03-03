// const hex = document.querySelector('.hex');
// const btn = document.querySelector('.generate');

// const randHex = () => {
//   const RandNum = Math.random().toString(16).substring(2, 8);
//   const hexColor = '#' + RandNum;
//   hex.innerHTML = hexColor;
//   document.body.style.backgroundColor = hexColor;
// };
// randHex();
// btn.addEventListener('click', randHex);

// method two
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('.generate');
const color = document.querySelector('.hex');

const randHexColor = () => {
  let hexValue = '#';
  for (let i = 0; i < 6; i++) {
    const randColor = hex[getRandomColor()];
    hexValue += randColor;
  }

  color.innerHTML = hexValue;
  document.body.style.backgroundColor = hexValue;
};

btn.addEventListener('click', randHexColor);
// randHexColor();

function getRandomColor() {
  return Math.floor(Math.random() * hex.length);
}
