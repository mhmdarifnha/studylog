const bg = (selectedColor) => {
  const bg = document.getElementById("bg");
  const display = document.getElementById("displaySelectedColor");
  display.textContent = `Warna yang kamu pilih adalah ${selectedColor}`;
  bg.style.background = selectedColor;
  document.bgColor = selectedColor;

  if (selectedColor == "black" || selectedColor == "blue") {
    return (bg.style.color = "white");
  } else {
    return (bg.style.color = "black");
  }
};

// saklar lampu
const lampu = document.getElementById("lamp");
const hour = new Date().getHours();
const minute = new Date().getMinutes();
const waktu = document.getElementById("waktu");

if (hour >= 5 && hour < 17) {
  lampu.src = "./assets/off.gif";
  waktu.textContent = `Sekarang jam ${hour}:${minute} lampu dimatikan`;
} else if (hour >= 17 && hour < 5) {
  lampu.src = "./assets/on.gif";
  waktu.textContent = `Sekarang sudah jam ${hour}:${minute} lampu dinyalakan`;
}

const saklarOn = () => {
  const info = document.getElementById("infoLamp");
  const lampu = document.getElementById("lamp");
  lampu.src = "./assets/on.gif";
  info.textContent = "Oke lampu dinyalakan..";
};

const saklarOff = () => {
  const info = document.getElementById("infoLamp");
  const lampu = document.getElementById("lamp");
  lampu.src = "./assets/off.gif";
  info.textContent = "Oke lampu dimatikan..";
};
