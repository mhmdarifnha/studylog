const on = () => {
  const bg = document.querySelector("main");
  const lamp = document.getElementById("lamp");
  lamp.src = "./assets/on.gif";
  bg.style.backgroundColor = "#212121";
  bg.style.color = "#f5f5f5";
};

const off = () => {
  const bg = document.querySelector("main");
  const lamp = document.getElementById("lamp");
  lamp.src = "./assets/off.gif";
  bg.style.backgroundColor = "#f5f5f5";
  bg.style.color = "#212121";
};
