const bilanganSubmit = (form) => {
  let bilangan = form.bilangan.value;
  let jenis = " ";

  if (isNaN(bilangan) || bilangan == "") {
    alert("Yang kamu inputkan bukan angka");
  } else {
    if (bilangan > 0) {
      jenis = " Adalah bilangan positif";
    } else if (bilangan < 0) {
      jenis = " Adalah bilangan negatif";
    } else {
      jenis = " Adalah bilangan nol";
    }
  }

  let result = bilangan + jenis;

  form.result.value = result;
};
