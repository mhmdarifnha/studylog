const pass = () => {
  let coba = 1;

  do {
    p = prompt("Masukkan password : ");

    if (p == "TJKT") {
      alert("Password benar");
      location.href = "./tjkt/index.html";
      break;
    } else {
      alert("Password salah ulangi lagi");
    }

    if (coba == 3) {
      alert("Anda sudah 3 kali salah, coba lagi nanti");
      history.go(-1);
    }

    coba = coba + 1;
  } while (coba <= 3);
};
