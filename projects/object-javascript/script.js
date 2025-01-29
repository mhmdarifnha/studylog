// objek text
handleSubmit = () => {
  let nama = document.forms["inputData"]["name"].value;
  let address = document.forms["inputData"]["address"].value;

  if (nama === "" || address === "") {
    alert("Semua field harus diisi");
  }

  document.forms["viewData"]["viewName"].value = nama;
  document.forms["viewData"]["viewAddress"].value = address;
};

handleReset = () => {
  document.forms["viewData"]["viewName"].value = "";
  document.forms["viewData"]["viewAddress"].value = "";
};

// objek radio
submitRadio = (form) => {
  let isSigma = "";

  if (form.sigma.checked == true) {
    isSigma = "Sigma";
  } else {
    isSigma = "Tidak Sigma";
  }

  alert(`Kamu ${isSigma}`);
};

// objek checkbox
submitCheckbox = (form) => {
  let hobby1 = "";
  let hobby2 = "";

  let ngoding = form.ngoding.checked;
  let belajar = form.belajar.checked;

  if (ngoding == true && belajar == true) {
    alert("Hobi kamu ngoding dan belajar");
  } else if (ngoding == true) {
    alert("Hobi kamu ngoding");
  } else if (belajar == true) {
    alert("Hobi kamu belajar");
  } else {
    alert("Pilih hobi kamu");
  }
  // if (ngoding == true) {
  //   hobby1 = "ngoding";
  // }

  // if (belajar == true) {
  //   hobby2 = "belajar";
  // }
};

// objek textarea
submitTextarea = () => {
  let comment = document.forms["objectTextarea"]["comment"].value;
  document.forms["outputComment"]["commentUser"].value = comment;
};

resetTextarea = () => {
  document.forms["outputComment"]["commentUser"].value = "";
};

// objek select
submitSelect = (form) => {
  let jurusan = form.jurusan.value;
  document.forms["outputSelect"]["selected"].value = jurusan;

  if (jurusan == " ") {
    alert("Pilih jurusannya!");
    document.forms["outputSelect"]["selected"].value = "";
  }
};

resetSelect = () => {
  document.forms["outputSelect"]["selected"].value = "";
};
