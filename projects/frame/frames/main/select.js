const handleSubmit = (form) => {
  const selectedOption = form.select.value;
  form.result.value = selectedOption;
};

const handleReset = (form) => {
  form.result.value = "";
};
