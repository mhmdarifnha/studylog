// deklarasi variabel untuk menyimpan angka yang diperlukan
// variabel yang saya buat konstan angkanya tidak berubah
const firstNumber = "100";
const secondNumber = "200";
// kedua variabel diatas tipe data nya string
const thirdNumber = 300;
const lastNumber = 400;
// dua variabel diatas itu angka numerik

const firstResult = firstNumber + secondNumber;
const secondResult = thirdNumber + lastNumber;

document.writeln("<p>Tipe data string kalau ditambah hasilnya gini</p>");
document.writeln(
  `<p>"${firstNumber}" ditambah dengan "${secondNumber}" hasilnya ${firstResult}</p>`
);
document.writeln("<p>Ini kalau tipe data numerik dijumlahkan</p>");
document.writeln(
  `<p>${thirdNumber} ditambah dengan ${lastNumber} hasilnya ${secondResult}</p>`
);

// penjumlahan berdasarkan input user
// gatau kenapa aku ikut tutorial pdf gabisa pas ini jadi ini tanya chatgpt 😂
// function jumlahkan() {
//   let numberOne = parseFloat(document.forms["penjumlahan"]["numberOne"].value);
//   if (isNaN(numberOne)) numberOne = 0.0;
//   let numberTwo = parseFloat(document.forms["penjumlahan"]["numberTwo"].value);
//   if (isNaN(numberTwo)) numberTwo = 0.0;

//   if (numberOne === "" || numberTwo === "") {
//     alert("Isikan nomornya dulu!");
//     return;
//   }

//   let result = numberOne + numberTwo;

//   alert(
//     `Hasil penjumlahan ${numberOne} ditambah ${numberTwo} adalah: ${result}`
//   );
// }

// validasi inputan user

function jumlahkan() {
  let numberOne = document.forms["operasiAritmatika"]["numberOne"].value;
  let numberTwo = document.forms["operasiAritmatika"]["numberTwo"].value;

  if (numberOne === "" || numberTwo === "") {
    alert("Semua field harus diisi!");
    return;
  }

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    alert("Inputkan nomor yang valid!");
    return;
  }

  let result = numberOne + numberTwo;

  alert(`Hasil dari ${numberOne} ditambah ${numberTwo} adalah: ${result}`);
}

// operasi aritmatika kurang

const kurangkan = () => {
  let numberOne = document.forms["operasiAritmatika"]["numberOne"].value;
  let numberTwo = document.forms["operasiAritmatika"]["numberTwo"].value;

  if (numberOne === "" || numberTwo === "") {
    alert("Inputkan nomornya!");
    return;
  }

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    alert("Inputkan nomor yang valid!");
    return;
  }

  let result = numberOne - numberTwo;

  alert(`Hasil dari ${numberOne} dikurang ${numberTwo} adalah: ${result}`);
};

// operasi aritmatika kali

const kalikan = () => {
  let numberOne = document.forms["operasiAritmatika"]["numberOne"].value;
  let numberTwo = document.forms["operasiAritmatika"]["numberTwo"].value;

  if (numberOne === "" || numberTwo === "") {
    alert("Inputkan nomornya!");
    return;
  }

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    alert("Inputkan nomor yang valid!");
    return;
  }

  let result = numberOne * numberTwo;

  alert(`Hasil dari ${numberOne} dikali ${numberTwo} adalah: ${result}`);
};

// operasi aritmatika bagi

const bagikan = () => {
  let numberOne = document.forms["operasiAritmatika"]["numberOne"].value;
  let numberTwo = document.forms["operasiAritmatika"]["numberTwo"].value;

  if (numberOne === "" || numberTwo === "") {
    alert("Inputkan nomornya!");
    return;
  }

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    alert("Inputkan nomor yang valid!");
    return;
  }

  let result = numberOne / numberTwo;

  alert(`Hasil dari ${numberOne} dibagi ${numberTwo} adalah: ${result}`);
};
