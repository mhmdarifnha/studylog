// factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// sumSeries
function sumSeries(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const handleSubmit = (form) => {
  let n = form.n.value;

  if (isNaN(n)) {
    alert("Only numbers are allowed");
    return;
  } else if (n == "") {
    alert("Please enter a number");
    return;
  } else {
    form.factorial.value = factorial(parseInt(n));
    form.sumSeries.value = sumSeries(parseInt(n));
    return;
  }
};
