const handleSubmit = (form) => {
  const display = document.getElementById("viewContent");
  let teks = "Menampilkan latihan";
  const latihan = form.latihan.value;
  display.innerText = `${teks} ${latihan}`;
  //   const frame = document.getElementById("main");
  const frame = parent.document.getElementById("main");
  let src = "";
  if (latihan == "Matematika") {
    src = "./frames/main/mtk.html";
  } else if (latihan == "Objek Teks") {
    src = "./frames/main/teks.html";
  } else if (latihan == "Objek Select") {
    src = "./frames/main/select.html";
  } else if (latihan == "Objek Checkbox") {
    src = "./frames/main/checkbox.html";
  } else {
    alert("Gaada file latihan");
  }
  frame.src = src;
};
