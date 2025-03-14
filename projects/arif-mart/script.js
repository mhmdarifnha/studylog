function handleSubmit(form) {
  let nama = form.name.value;
  let menu = form.menus.value;
  let sumOfMenu = parseInt(form.sumOfMenu.value);
  let member = form.member.checked;
  let price = 0;
  let discount = 0;
  let pay = 0;
  let info = document.getElementById("textDisplay");
  let infoText = "";

  if (menu == "piscok") {
    price = 2500;
  } else if (menu == "gedang goreng") {
    price = 2500;
  } else if (menu == "esteh") {
    price = 2500;
  } else if (menu == "kopi") {
    price = 4000;
  }

  if (nama == "") info.innerText += " Siapa namamu?";
  if (menu == "") info.innerText += " Pilih salah satu menu!";
  if (isNaN(sumOfMenu)) info.innerText += " Minimal beli satu!";

  if (nama == "" || menu == "" || isNaN(sumOfMenu)) {
    info.innerText += " Input yang benar!";
  } else {
    info.innerText = `Woi ${nama} bayar dulu ya!`;
    if (member) {
      discount = price * 0.3;
    } else {
      discount;
    }

    pay = price * sumOfMenu - discount;

    form.price.value = price;
    form.subTotal.value = price * sumOfMenu;
    form.discount.value = discount;
    form.pay.value = pay;
  }
}

// let member = document.getElementById("member");
// member.addEventListener("change", function () {
//   let askMember = document.getElementById("askMember");
//   if (this.checked) {
//     askMember.innerText = "Aku join member";
//   } else {
//     askMember.innerText = "Gak join member";
//   }
// });
