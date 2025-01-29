handleSubmit = (form) => {
  let nama = form.name.value;
  let address = form.address.value;
  let gender = form.gender.value;
  let major = form.major.value;
  let hobby = "";
  let ngoding = form.ngoding.checked;
  let belajar = form.belajar.checked;
  let comment = form.comment.value;

  if (major == " ") {
    major = "";
  }

  if (ngoding == true && belajar == true) {
    hobby = "Ngoding dan Belajar";
  } else if (ngoding == true) {
    hobby = "Ngoding";
  } else if (belajar == true) {
    hobby = "Belajar";
  } else {
    hobby = "";
  }

  //   validasi input kosong
  if (
    nama == "" ||
    address == "" ||
    gender == "" ||
    major == "" ||
    hobby == "" ||
    comment == ""
  ) {
    nama = "";
    address = "";
    gender = "";
    major = "";
    hobby = "";
    comment = "";
    isSigma = "";
    alert(`Kamu belum mengisi semua field`);
  }

  //   munculkan data
  form.viewName.value = nama;
  form.viewAddress.value = address;
  form.viewGender.value = gender;
  form.viewMajor.value = major;
  form.viewHobby.value = hobby;
  form.viewComment.value = comment;
};
