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
