function checkInput(name, email, comment) {
  let info = [];

  if (name === "") info.push("\nNama tidak boleh kosong!");
  if (email === "") info.push("\nEmail tidak boleh kosong!");
  if (comment === "") info.push("\nKomentar tidak boleh kosong!");

  if (info.length > 0) {
    return { isValid: false, message: info };
  }

  return { isValid: true, message: "Input benar" };

  //   if (name != "" && email != "" && comment != "") {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

const handleSubmit = (form) => {
  const name = form.name.value;
  const email = form.email.value;
  const comment = form.comment.value;
  const displayInfo = document.getElementById("info");
  const info = checkInput(name, email, comment).message;
  const check = checkInput(name, email, comment).isValid;
  let subject = "Form";
  let body = `Nama: ${name}%0AEmail: ${email}%0AComment: ${comment}`;

  if (check === true) {
    displayInfo.textContent = info;
    window.location.href = `mailto:muhamadarifulinnuha@gmail.com?subject=${subject}&body=${body}`;
  } else if (check === false) {
    displayInfo.textContent = info;
  }
};
