const goToPage = () => {
  let selectedInt = document.objctDcmnt.page.selectedIndex;
  let selectedStr = document.objctDcmnt.page.options[selectedInt].text;
  const lihatkan = document.getElementById("lihatkan");
  lihatkan.innerText = `Menuju ke page ${selectedStr}`;
};

const goTo = (form) => {
  let index = page.selectedIndex;

  if ((index = 0)) {
    window.location.href = "../greeting/index.html";
  } else if ((index = 1)) {
    window.location.href = "../perhitungan-bunga/index.html";
  } else if ((index = 2)) {
    window.location.href = "../percabangan//latihan/index.html";
  }

  return true;
};
