const handleSubmit = (form) => {
  let a = parseInt(form.firstNum.value);
  let b = parseInt(form.secondNum.value);
  let c = parseInt(form.lastNum.value);

  const D = Math.pow(b, 2) - 4 * a * c;

  let result = "";
  if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    result = `Diskriminan ${D} (Akar real berbeda)\n x1 = ${x1.toFixed(
      2
    )}, x2 = ${x2.toFixed(2)}`;
  } else if (D === 0) {
    const x = -b / (2 * a);
    result = `Diskriminan ${D} (Akar real dan sama)\n x = ${x.toFixed(2)}`;
  } else {
    const realPart = (-b / (2 * a)).toFixed(2);
    const imagPart = (Math.sqrt(-D) / (2 * a)).toFixed(2);
    result = `Diskriminan ${D} (Akar kompleks)\n x1= ${realPart} + ${imagPart}i, x2 = ${realPart} - ${imagPart}i`;
  }

  form.result.value = result;
};
