const submitBt = (form) => {
  let Mo = form.saldo.value;
  let n = form.waktu.value;
  let p = form.bunga.value / 100;
  let result = "";

  if (isNaN(Mo) || isNaN(n) || isNaN(p)) {
    alert("Input harus berupa angka");
    return;
  } else if (Mo < 0 || n < 0 || p < 0) {
    alert("Input tidak boleh negatif");
    return;
  } else if (Mo === "" || n === "" || p === "") {
    alert("Input tidak boleh kosong");
    return;
  } else {
    for (let i = 1; i <= n; i++) {
      let Mn = Mo * (1 + p * i);
      result += `Saldo di bulan ke-${i} adalah ${Mn.toFixed(2)}\n`;
    }
  }

  form.resultBt.value = result;
};

const submitBm = (form) => {
  let Mo = form.saldoM.value;
  let n = form.waktuM.value;
  let p = form.bungaM.value / 100;
  let result = "";
  if (isNaN(Mo) || isNaN(n) || isNaN(p)) {
    alert("Input harus berupa angka");
    return;
  } else if (Mo < 0 || n < 0 || p < 0) {
    alert("Input tidak boleh negatif");
    return;
  } else if (Mo === "" || n === "" || p === "") {
    alert("Input tidak boleh kosong");
    return;
  } else {
    for (let i = 1; i <= n; i++) {
      // let Mn = Mo * (1 + p) ** i;
      Mn = Mo * Math.pow(1 + p, i);
      result += `Saldo di bulan ke-${i} adalah ${Mn.toFixed(2)}\n`;
    }
  }

  form.resultBm.value = result;
};
