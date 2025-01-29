const whileSubmit = (form) => {
  let deret = form.deret.value;
  let jml = 0.0;
  let angka = 1;

  if (deret === "") {
    alert("Data tidak boleh kosong");
    return;
  } else if (isNaN(deret)) {
    alert("Data harus berupa angka");
    return;
  } else {
    deret = parseInt(deret);

    while (angka <= deret) {
      jml += angka;
      angka++;
    }
  }

  form.outputDeret.value = `1 sampai ${deret} adalah ${jml}`;
};
