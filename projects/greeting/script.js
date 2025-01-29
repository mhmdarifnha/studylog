let markue = document.querySelector("div#text");

const waktuIni = new Date().getHours();
const greetingText = [
  "Selamat Pagi!!",
  "Selamat Siang!",
  "Selamat Sore!!!",
  "Selamat Malam😴",
];

let greeting = "";
if (waktuIni >= 0 && waktuIni < 12) {
  greeting = greetingText[0];
} else if (waktuIni >= 12 && waktuIni < 16) {
  greeting = greetingText[1];
} else if (waktuIni >= 16 && waktuIni < 19) {
  greeting = greetingText[2];
} else {
  greeting = greetingText[3];
}

for (let i = 0; i < 10; i++) {
  const h4 = document.createElement("h4");
  h4.innerText = greeting;
  markue.appendChild(h4);
}
