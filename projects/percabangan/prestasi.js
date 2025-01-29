const prestasiSubmit = (form) => {
  let quis = form.quis.value;
  let tugas = form.tugas.value;
  let uts = form.uts.value;
  let uas = form.uas.value;
  let ip = "";
  let ket = "";

  //   validasi inputan user harus angka
  if (
    isNaN(quis) ||
    isNaN(tugas) ||
    isNaN(uts) ||
    isNaN(uas) ||
    quis === "" ||
    tugas === "" ||
    uts === "" ||
    uas === "" ||
    quis < 0 ||
    quis > 100 ||
    tugas < 0 ||
    tugas > 100 ||
    uts < 0 ||
    uts > 100 ||
    uas < 0 ||
    uas > 100
  ) {
    alert("Pastikan semua input diisi dengan angka antara 0-100.");
    ip = "";
    ket = "";
    form.viewIp.value = "";
    form.viewKet.value = "";
    return;
  }

  //   menghitung nilai akhir
  let na = 0.1 * quis + 0.2 * tugas + 0.3 * uts + 0.4 * uas;

  //   menentukan ip dan keterangan
  if (na > 80 && na <= 100) {
    ip = "A";
    ket = "Lulus dengan Sangat Baik";
  } else if (na > 68 && na <= 80) {
    ip = "B";
    ket = "Lulus dengan Baik";
  } else if (na > 55 && na <= 68) {
    ip = "C";
    ket = "Lulus dengan Cukup";
  } else if (na > 38 && na <= 55) {
    ip = "D";
    ket = "Lulus dengan Kurang";
  } else {
    ip = "E";
    ket = "Tidak Lulus";
  }

  //   memunculkan ke web browser
  form.viewIp.value = ip;
  form.viewKet.value = ket;
};
