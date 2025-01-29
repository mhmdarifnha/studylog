const h4 = document.createElement("h4");
// object date
const objectDate = document.querySelector("#objectDate");
const date = document.querySelector("#date");
const clock = document.querySelector("#clock");
const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
// hari
const getDay = new Date().getDay();
const hariIni = hari[getDay];
// tanggal
const tanggalIni = new Date().getDate();
// bulan
const getMonth = new Date().getMonth();
const bulanIni = bulan[getMonth];
// tahun
const tahunIni = new Date().getFullYear();
// jam
const jamIni = new Date().getHours();
// menit
const menitIni = new Date().getMinutes();
// detik
const detikIni = new Date().getSeconds();

h4.innerText = "Latihan Objek Date/Tanggal";
objectDate.appendChild(h4);

date.innerText = `Sekarang adalah hari ${hariIni}, tanggal ${tanggalIni} ${bulanIni} ${tahunIni}`;
objectDate.appendChild(date);

clock.innerText = `Sekarang jam ${jamIni}:${menitIni}:${detikIni}`;
objectDate.appendChild(clock);

// object math
// menghitung pangkat
const pow = (form) => {
  let firstNum = form.firstNum.value;
  let secondNum = form.secondNum.value;
  if (isNaN(firstNum) || isNaN(secondNum)) {
    return alert("Input harus berupa angka");
  } else if (firstNum === "" || secondNum === "") {
    return alert("Input tidak boleh kosong");
  } else if (firstNum <= 0 || secondNum <= 0) {
    return alert("Inputkan bilangan positif");
  } else {
    let pow = Math.pow(firstNum, secondNum);
    let result = `Hasil dari ${firstNum} dipangkat ${secondNum} adalah ${pow}`;
    form.result.value = result;
    return;
  }
};

// mencari nilai tertinggi
const maksimal = (form) => {
  let firstNum = form.firstNum.value;
  let secondNum = form.secondNum.value;
  let result = "";
  if (isNaN(firstNum) || isNaN(secondNum)) {
    return alert("Input harus berupa angka");
  } else if (firstNum === "" || secondNum === "") {
    return alert("Input tidak boleh kosong");
  } else if (firstNum == secondNum) {
    result = `${firstNum} dan ${secondNum} Nilainya sama`;
    form.result.value = result;
    return;
  } else {
    let max = Math.max(firstNum, secondNum);
    result = `Angka tertinggi dari ${firstNum} dan ${secondNum} adalah ${max}`;
    form.result.value = result;
    return;
  }
};

// random
const divRandom = document.getElementById("divRandom");
const pengunjung = document.getElementById("pengunjung");
const akar = document.getElementById("akar");
const rndmVisit = Math.round(Math.random() * 50000);
pengunjung.innerText = `Kamu adalah pengunjung ke ${rndmVisit}`;
const resAkar = Math.sqrt(rndmVisit);
akar.innerText = `Akar dari ${rndmVisit} adalah ${resAkar}`;
