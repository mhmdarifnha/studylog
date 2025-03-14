const tambah = (form) => {
  let firstNum = parseFloat(form.firstNum.value);
  let secondNum = parseFloat(form.secondNum.value);
  let result = "";
  let hasil = firstNum + secondNum;

  if (isNaN(firstNum) || isNaN(secondNum)) {
    result = "Input harus berupa angka";
  } else {
    result = `Hasil dari ${firstNum} ditambah ${secondNum} adalah ${hasil}`;
  }

  return (form.result.value = result);
};

const kurang = (form) => {
  let firstNum = parseFloat(form.firstNum.value);
  let secondNum = parseFloat(form.secondNum.value);
  let result = "";
  let hasil = firstNum - secondNum;

  if (isNaN(firstNum) || isNaN(secondNum)) {
    result = "Input harus berupa angka";
  } else {
    result = `Hasil dari ${firstNum} dikurang ${secondNum} adalah ${hasil}`;
  }

  return (form.result.value = result);
};

const kali = (form) => {
  let firstNum = parseFloat(form.firstNum.value);
  let secondNum = parseFloat(form.secondNum.value);
  let result = "";
  let hasil = firstNum * secondNum;

  if (isNaN(firstNum) || isNaN(secondNum)) {
    result = "Input harus berupa angka";
  } else {
    result = `Hasil dari ${firstNum} dikali ${secondNum} adalah ${hasil}`;
  }

  return (form.result.value = result);
};

const bagi = (form) => {
  let firstNum = parseFloat(form.firstNum.value);
  let secondNum = parseFloat(form.secondNum.value);
  let result = "";
  let hasil = firstNum / secondNum;

  if (isNaN(firstNum) || isNaN(secondNum)) {
    result = "Input harus berupa angka";
  } else {
    result = `Hasil dari ${firstNum} dibagi ${secondNum} adalah ${hasil}`;
  }

  return (form.result.value = result);
};
