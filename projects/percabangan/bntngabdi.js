const bntngAbdiSubmit = (form) => {
  let nama = form.name.value;
  let destination = form.destination.value;
  let ammountTicket = form.ammountTicket.value;
  let member = form.member.checked;
  let priceTicket = 0.0;
  let sub = 0.0;
  let discount = 0.0;
  let total = 0.0;

  if (destination == "Jakarta") {
    priceTicket = 100000;
  } else if (destination == "Cirebon") {
    priceTicket = 150000;
  } else if (destination == "Tasikmalaya") {
    priceTicket = 200000;
  } else {
    priceTicket = 250000;
  }

  sub = priceTicket * ammountTicket;

  if (member == true) {
    discount = 0.1 * sub;
  } else {
    discount = 0.0;
  }

  total = sub - discount;

  //validasi dikit
  discount = discount == 0 ? "Tidak ada diskon" : "Rp." + eval(discount);

  if (destination == "" || ammountTicket == "") {
    priceTicket = 0;
    sub = 0;
    discount = "";
    total = 0;
    alert("Mohon isi data dengan lengkap");
  }
  //   memunculkan ke web browser
  form.priceTicket.value = priceTicket == 0 ? "" : "Rp." + eval(priceTicket);
  form.subTotal.value = sub == 0 ? "" : "Rp." + eval(sub);
  form.discount.value = discount;
  form.totalAmmount.value = total == 0 ? "" : "Rp." + eval(total);
};
