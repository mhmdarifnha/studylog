const handleSubmit = (form) => {
  let nama = form.nama.value;
  panjang = nama.length;
  const container = document.getElementById("container");

  const namaKmu = document.createElement("p");
  namaKmu.innerHTML = `Nama kamu adalah ${nama}`;
  const pnjangNama = document.createElement("p");
  pnjangNama.innerHTML = `Panjang nama kamu adalah ${panjang} karakter`;
  const namaBig = document.createElement("p");
  namaBig.innerHTML = `method BIG ${nama.big()}`;
  const namaSmall = document.createElement("p");
  namaSmall.innerHTML = `method small ${nama.small()}`;
  const namaSub = document.createElement("p");
  namaSub.innerHTML = `method sub ${nama.sub()}`;
  const namaSup = document.createElement("p");
  namaSup.innerHTML = `method sup ${nama.sup()}`;
  const namaBold = document.createElement("p");
  namaBold.innerHTML = `method bold ${nama.bold()}`;
  const namaItlc = document.createElement("p");
  namaItlc.innerHTML = `method italic ${nama.italics()}`;
  const namaColor = document.createElement("p");
  namaColor.innerHTML = `method fontcolor ${nama.fontcolor("red")}`;
  const namaLow = document.createElement("p");
  namaLow.innerHTML = `method lowercase ${nama.toLowerCase()}`;
  const namaUp = document.createElement("p");
  namaUp.innerHTML = `method uppercase ${nama.toUpperCase()}`;
  const namaSbStr = document.createElement("p");
  namaSbStr.innerHTML = `method substring ${nama.substring(1, 4)}`;
  const namaStrike = document.createElement("p");
  namaStrike.innerHTML = `method strike ${nama.strike()}`;
  const namaChrAt = document.createElement("p");
  namaChrAt.innerHTML = `method charAt 3 ${nama.charAt(3)}`;
  const namaLink = document.createElement("p");
  namaLink.innerHTML = `method link ${nama.link("../../index.html")}`;
  const namaIndex = document.createElement("p");
  namaIndex.innerHTML = `Index Huruf c ${nama.indexOf("c")}`;
  const awal = nama[3];
  const akhir = nama.length;
  const trsisa = document.createElement("p");
  trsisa.innerHTML = `Kata Yang Tersisa ${nama.substring(awal, akhir)}`;

  container.appendChild(namaKmu);
  container.appendChild(pnjangNama);
  container.appendChild(namaBig);
  container.appendChild(namaSmall);
  container.appendChild(namaSub);
  container.appendChild(namaSup);
  container.appendChild(namaBold);
  container.appendChild(namaItlc);
  container.appendChild(namaColor);
  container.appendChild(namaLow);
  container.appendChild(namaUp);
  container.appendChild(namaSbStr);
  container.appendChild(namaStrike);
  container.appendChild(namaChrAt);
  container.appendChild(namaLink);
  container.appendChild(namaIndex);
  container.appendChild(trsisa);

  // if (nama === "") {
  //   result = "Inputkan nama kamu";
  // } else {
  //   document.writeln(`<h4>${nama}</h4>`);
  // }
};

const handleReset = (form) => {
  const container = document.getElementById("container");
  container.innerHTML = "";
};

// const form = document.querySelector("form");
// const output = document.querySelector("h4#output");
// let panjang = nama.length();
// let besar = nama.big();
// let n = nama.substring(1, 4);
// let kapital = nama.toUppercase();
// let linkNama = nama.link("../index.html");
