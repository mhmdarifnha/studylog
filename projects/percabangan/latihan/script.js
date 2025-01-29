const handleSubmit = (form) => {
  let nama = form.name.value;
  let destination = form.destination.value;
  let classTravel = form.classTravel.value;
  let ammountTicket = form.ammountTicket.value;
  let member = form.member.checked;
  let priceTicket = 0.0;
  let sub = 0.0;
  let discount = 0.0;
  let total = 0.0;

  if (destination == "Jakarta" && classTravel == "Eksekutif") {
    priceTicket = 70000;
  } else if (destination == "Jakarta" && classTravel == "Bisnis") {
    priceTicket = 40000;
  } else if (destination == "Jakarta" && classTravel == "Ekonomi") {
    priceTicket = 10000;
  } else if (destination == "Solo" && classTravel == "Eksekutif") {
    priceTicket = 80000;
  } else if (destination == "Solo" && classTravel == "Bisnis") {
    priceTicket = 50000;
  } else if (destination == "Solo" && classTravel == "Ekonomi") {
    priceTicket = 20000;
  } else if (destination == "Surabaya" && classTravel == "Eksekutif") {
    priceTicket = 90000;
  } else if (destination == "Surabaya" && classTravel == "Bisnis") {
    priceTicket = 60000;
  } else if (destination == "Surabaya" && classTravel == "Ekonomi") {
    priceTicket = 30000;
  } else {
    priceTicket;
  }

  sub = ammountTicket * priceTicket;

  if (member == true) {
    discount = 0.1 * sub;
  } else {
    discount = 0.0;
  }

  total = sub - discount;

  discount = discount == 0 ? "Tidak ada diskon" : "Rp." + eval(discount);

  if (destination == "" || classTravel == "" || ammountTicket == "") {
    priceTicket = 0;
    sub = 0;
    discount = "";
    total = 0;
    alert("Mohon isi data dengan lengkap");
    return;
  }

  //   memunculkan ke web browser
  form.priceTicket.value = priceTicket == 0 ? "" : "Rp." + eval(priceTicket);
  form.subTotal.value = sub == 0 ? "" : "Rp." + eval(sub);
  form.discount.value = discount;
  form.totalAmmount.value = total == 0 ? "" : "Rp." + eval(total);
};
