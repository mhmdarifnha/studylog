handleSubmit = (form) => {
  let nis = form.nis.value;
  let nama = form.name.value;
  let gender = form.gender.value;
  let religion = form.religion.value;
  let major = form.major.value;
  let hobby = "";
  let ngoding = form.ngoding.checked;
  let belajar = form.belajar.checked;
  let comment = form.comment.value;

  if (isNaN(nis)) {
    alert("NIS harus berupa angka");
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
    nis == "" ||
    nama == "" ||
    religion == "" ||
    gender == "" ||
    major == "" ||
    hobby == "" ||
    comment == ""
  ) {
    nis = "";
    nama = "";
    religion = "";
    gender = "";
    major = "";
    hobby = "";
    comment = "";
    alert(`Kamu belum mengisi semua field`);
  }

  //   munculkan data
  form.viewNis.value = nis;
  form.viewName.value = nama;
  form.viewReligion.value = religion;
  form.viewGender.value = gender;
  form.viewMajor.value = major;
  form.viewHobby.value = hobby;
  form.viewComment.value = comment;
};
