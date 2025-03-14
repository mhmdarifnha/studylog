const handleSubmit = (form) => {
  let result = "Pilihan kamu ";
  let satu = form.satu.checked == true ? (result += "\nSatu") : result;
  let dua = form.dua.checked == true ? (result += "\nDua") : result;
  if (form.satu.checked == false && form.dua.checked == false) {
    result += "\nGada";
  }
  form.result.value = result;
};
