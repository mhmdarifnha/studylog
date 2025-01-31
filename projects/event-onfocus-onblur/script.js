const inputNis = () => {
  const nis = document.getElementById("nis");

  if (nis.value == "") {
    alert("NIS tidak boleh kosong");
  }
};

const inputName = () => {
  const name = document.getElementById("name");

  if (name.value == "") {
    alert("Nama tidak boleh kosong");
  }
};

const inputAddress = () => {
  const address = document.getElementById("address");
  if (address.value == "") {
    alert("Alamat tidak boleh kosong");
  }
};

const handleSubmit = (form) => {
  const nis = form.nis.value;
  const name = form.name.value;
  const address = form.address.value;

  if (isNaN(nis)) {
    return alert("Input NIS harus angka");
  }

  if (nis != "" && name != "" && address != "") {
    return alert("Terimakasih sudah mengisi");
  } else {
    return alert("Data yang dibutuhkan mohon dilengkapi");
  }
};
