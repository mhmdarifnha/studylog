// next prev btn apa gtau
const gambar = document.getElementById("galleryImg");
let num = 1;
gambar.src = `./assets/pic${num}.jpg`;

const next = () => {
  //   num++;
  //   if (num == 6) num = 1;
  num = num < 3 ? num + 1 : 1;
  gambar.src = `./assets/pic${num}.jpg`;
};

const prev = () => {
  //   num--;
  //   if (num == 0) num = 5;
  num = num > 1 ? num - 1 : 3;
  gambar.src = `./assets/pic${num}.jpg`;
};

// slideshow
const img = document.getElementById("slideshow");
let step = 1;
img.src = `./assets/pic${step}.jpg`;

const slideit = () => {
  step = step < 3 ? step + 1 : 1;
  img.src = `./assets/pic${step}.jpg`;
  setTimeout(slideit, 2500);
};

setTimeout(slideit, 2500);
